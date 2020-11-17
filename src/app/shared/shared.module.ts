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



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SearchComponent, HeaderLogoComponent, MenuHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule,
    FontAwesomeModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    BootstrapModule,
    SearchComponent,
    HeaderLogoComponent,
    MenuHeaderComponent
  ]
})
export class SharedModule { }
