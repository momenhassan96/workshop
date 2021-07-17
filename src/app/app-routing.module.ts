import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { breadCrumb: ['Home'] } },
  { path: 'news-details/:id', loadChildren: () => import('./feature/news-details/news-details.module').then(m => m.NewsDetailsModule) },
  { path: 'news-listing', loadChildren: () => import('./feature/news-listing/news-listing.module').then(m => m.NewsListingModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
