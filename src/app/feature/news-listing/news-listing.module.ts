import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListingRoutingModule } from './news-listing-routing.module';
import { NewsListingComponent } from './news-listing.component';
import { FormsModule } from '@angular/forms';
import { RelatedTopicsModule } from '../related-topics/related-topics.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewsListingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewsListingRoutingModule,
    SharedModule
  ],
})
export class NewsListingModule { }
