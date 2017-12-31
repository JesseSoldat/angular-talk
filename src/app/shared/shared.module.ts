import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
//Components
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
//PIPES
import { FilterListPipe } from '../pipes/FilterList';


@NgModule({
  declarations: [
    SearchBoxComponent,
    SearchButtonComponent,
    CardComponent,
    ModalComponent,
    FilterListPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SearchBoxComponent,
    SearchButtonComponent,
    CardComponent,
    ModalComponent,
    FilterListPipe,
    CommonModule,
    FormsModule ,
    RouterModule
  ]
})
export class SharedModule {}