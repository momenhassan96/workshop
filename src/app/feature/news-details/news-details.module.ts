import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailsRoutingModule } from './news-details-routing.module';
import { NewsDetailsComponent } from './news-details.component';
import { RelatedTopicsModule } from '../related-topics/related-topics.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule,
    RelatedTopicsModule,
    SharedModule
  ]
})
export class NewsDetailsModule { }
