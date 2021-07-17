import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailsComponent } from './news-details.component';


const routes: Routes = [
  { path: '', component: NewsDetailsComponent, data: { breadCrumb: ['Home', 'News', 'News Details'] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDetailsRoutingModule { }
