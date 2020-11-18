import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbAlert, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    // NgbCarousel,
  ],
  exports: [
    NgbModule,
    // NgbAlert,
    // NgbCarousel
  ]
})
export class BootstrapModule { }
