import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  faShareAlt = faShareAlt;
  faHeart = faHeart;
  faEnvelopr = faEnvelope;
  openMenu = false;
  addClass = false;
  @Input() data: object;
  constructor() { 

   
  }

  ngOnInit(): void {

  }

}
