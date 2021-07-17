import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  isHumburgerMenu: boolean;
  navItems: Array<{}>;
  constructor() {
    this.navItems = [
      { label: 'Home', route: '/home' },
      {
        label: 'About us',
        children: [
          { label: 'Who are us', route: '/who-are-us' },
          { label: 'Why us?', route: '/why-us' }
        ]
      },
      {
        label: 'News',
        children: [
          { label: 'News', route: '/news-listing' },
          { label: 'Events', route: '/events' }
        ]
      },
      {
        label: 'Careers',
        children: [{ label: 'Opportunities', route: '/opportunities' }]
      },
      { label: 'Contact us', route: 'contact-us' },
      { label: 'Site Map', route: 'site-map' }
    ];

  }


  ngOnInit(): void {
  }

}
