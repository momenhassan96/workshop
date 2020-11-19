import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NewsDetailsComponent } from './feature/news-details/news-details.component';
import { NewsListingComponent } from './feature/news-listing/news-listing.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { breadCrumb: ['Home'] } },
  { path: 'news-listing', component: NewsListingComponent, data: { breadCrumb: ['Home','News'] } },
  { path: 'news-details/:id', component: NewsDetailsComponent, data: { breadCrumb: ['Home','News','News Details'] } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
