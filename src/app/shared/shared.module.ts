import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './components/card/card.component';
import { LimitPipe } from './pipes/limit.pipe';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SearchComponent, HeaderLogoComponent, MenuHeaderComponent, CardComponent, LimitPipe, CarouselComponent, SearchFilterPipe],
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    BootstrapModule,
    SearchComponent,
    HeaderLogoComponent,
    MenuHeaderComponent,
    CardComponent,
    FontAwesomeModule,
    LimitPipe,
    CarouselComponent,
    SearchFilterPipe
  ]
})
export class SharedModule { 

}
