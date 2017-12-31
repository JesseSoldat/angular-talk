import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { DataStoreService } from '../../services/data-store.service';
import { AuthService } from '../../services/auth.service';
import { intersection, difference } from 'lodash';

declare let jQuery: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() showModal: boolean;
  @Output() onHideModal = new EventEmitter();
  uid: string;

  myMovieIds = [];
  othersMovieIds = [];
  matchedUserList = [];

  constructor(private favoritesService: FavoritesService,
              private authService: AuthService,
              private dataStoreService: DataStoreService,
              private router: Router) {}

  ngOnInit() {
    jQuery('#myModal').on('hide.bs.modal', () => {
      this.onHideModal.emit();
      // this.closeModal();
    });
  }

  ngOnChanges(changes) {
    if(changes['showModal']) {
      // console.log(changes);
      if(changes['showModal']['currentValue'] === true) {
        jQuery('#myModal').modal('show');
        this.searchUsersList();
      }
    }
  }

  closeModal() {
  //   this.onHideModal.emit();
  }

  onNavigate(matched, e) {
    e.preventDefault();
    this.dataStoreService.changeUnMatchedMovieIds(matched.noMatch);
    this.router.navigate(['../matched-user', matched.name, matched.uid]);
  }

  searchUsersList() {
    this.uid = this.authService.getUid();
    
    this.favoritesService.getOtherUsersLists().subscribe(usersList => {
      usersList.forEach(user => {
        this.getMyMovieIds(user);
        this.getOthersMovieIds(user);
      });
      this.createUserMatchedObject();
    });
  } 

  getMyMovieIds(user) {
    if(this.uid === user.key) {
      for(let key in user.movies) {
        if(user.movies.hasOwnProperty(key)) {
          this.myMovieIds.push(user.movies[key].id);
        }
      }
    }
  }

  getOthersMovieIds(user) {
    if(this.uid !== user.key) {
      let tempArray = [user.name, user.key];
      for(let key in user.movies) {
        tempArray.push(user.movies[key].id);
      }
      this.othersMovieIds.push(tempArray);
    }
  }

  createUserMatchedObject() {
    this.othersMovieIds.forEach(othersArray => {
      let matchedObj = {
        name: '',
        uid: '',
        isMatch: [],
        noMatch: [],
        length: 0
      };
      matchedObj.name = othersArray.shift();
      matchedObj.uid = othersArray.shift();

      matchedObj.isMatch = intersection(othersArray, this.myMovieIds);

      matchedObj.noMatch = difference(othersArray, this.myMovieIds);

      matchedObj.length = matchedObj.isMatch.length;

      this.matchedUserList.push(matchedObj);
    });
    this.matchedUserList.sort(this.sortByMostMatches);
  }

  sortByMostMatches(b, a) {
    if (a.length < b.length) {
      return -1;      
    }
    if (a.length > b.length) {
      return 1;      
    }
    return 0;
  }
}