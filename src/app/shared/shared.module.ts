import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';


//Components
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    SearchBoxComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchBoxComponent,
    CardComponent,
    CommonModule,
    FormsModule

    
  ]
})
export class SharedModule {}