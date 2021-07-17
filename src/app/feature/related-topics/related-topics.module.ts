import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedTopicsComponent } from './related-topics.component';



@NgModule({
  declarations: [RelatedTopicsComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    RelatedTopicsComponent
  ]
})
export class RelatedTopicsModule { }
