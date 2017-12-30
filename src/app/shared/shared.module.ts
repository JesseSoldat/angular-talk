import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
//Components
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardComponent } from './card/card.component';
//PIPES
import { FilterListPipe } from '../pipes/FilterList';


@NgModule({
  declarations: [
    SearchBoxComponent,
    CardComponent,
    FilterListPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchBoxComponent,
    CardComponent,
    FilterListPipe,
    CommonModule,
    FormsModule

    
  ]
})
export class SharedModule {}