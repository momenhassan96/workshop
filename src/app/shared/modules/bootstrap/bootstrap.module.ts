import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule,NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    NgbModule,
    NgbAlert
  ]
})
export class BootstrapModule { }
