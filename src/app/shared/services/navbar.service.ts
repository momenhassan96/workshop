import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isHamburger = false;
  isHamburger$ = new Subject<boolean>();

  constructor() {
    this.isHamburger$.next(this.isHamburger);
  }

  changeState() {
    this.isHamburger = !this.isHamburger;
    this.isHamburger$.next(this.isHamburger);
    return this.isHamburger$;
  }
}
