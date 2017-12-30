import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

declare let jQuery: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() showModal: boolean;

  @Output() onHideModal = new EventEmitter();

  constructor(private favoritesService: FavoritesService) {}

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
    this.favoritesService.getOtherUsersLists().subscribe(list => {
      console.log(list);
    });
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