import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListingComponent } from './news-listing.component';


const routes: Routes = [
  { path: '', component: NewsListingComponent, data: { breadCrumb: ['Home', 'News'] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsListingRoutingModule { }
