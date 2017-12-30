import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { AuthService } from '../../services/auth.service';

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

  constructor(private favoritesService: FavoritesService,
              private authService: AuthService) {}

  ngOnInit() {
    jQuery('#myModal').on('hide.bs.modal', () => {
      console.log('hide the modal event');
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

  searchUsersList() {
    this.uid = this.authService.getUid();
    
    this.favoritesService.getOtherUsersLists().subscribe(usersList => {
      console.log(usersList);
      this.getMyMovieIds(usersList);
    });
  }

  getMyMovieIds(usersList) {
    usersList.forEach(user => {
      if(this.uid === user.key) {
        for(let key in user.movies) {
          if(user.movies.hasOwnProperty(key)) {
            this.myMovieIds.push(user.movies[key].id);
          }
        }
      }
    });
    console.log(this.myMovieIds);
  }

  compareLengths(b, a) {
    if (a.length < b.length) {
      return -1;      
    }
    if (a.length > b.length) {
      return 1;      
    }
    return 0;
  }
}