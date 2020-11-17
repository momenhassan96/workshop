import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  isNavbarCollapsed: boolean;
  isHumburgerMenu: boolean;
  search: string;
  clicked: boolean;
  faCheck = faCheck;
  checkedEn = true;
  checkedAr = false;

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.isNavbarCollapsed = false;
    this.navbarService.isHamburger$.subscribe(res => {
      this.isHumburgerMenu = res;
    });
  }



}
