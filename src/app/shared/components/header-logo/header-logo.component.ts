import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)',
        transformOrigin: 'left',
        width: '20px',
        marginBottom: '2px',
        marginLeft: '10px',
      })),
      state('hide', style({
        opacity: '0',
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        width: '20px',
        marginTop: '6px',
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class HeaderLogoComponent implements OnInit {
  isHamburguer = true;
  imageSrc = '../../../../assets/images/Link_logo_vertical_color_Light_RGB.png';
  constructor(private navbarService: NavbarService) {

  }

  ngOnInit(): void {
  }

  changeState() {
    this.isHamburguer = !this.isHamburguer;
    this.navbarService.changeState();
  }
}
