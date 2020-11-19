import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { RelatedTopicsComponent } from './related-topics/related-topics.component';



@NgModule({
  declarations: [NewsListingComponent, NewsDetailsComponent, RelatedTopicsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ], exports: [
    NewsListingComponent,
    NewsDetailsComponent,
    RelatedTopicsComponent
  ]
})
export class FeatureModule { }
