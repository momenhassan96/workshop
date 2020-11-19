import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NewsListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],exports:[
    NewsListingComponent
  ]
})
export class FeatureModule { }
