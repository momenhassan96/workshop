import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-topics',
  templateUrl: './related-topics.component.html',
  styleUrls: ['./related-topics.component.scss']
})
export class RelatedTopicsComponent implements OnInit {

  @Input() imgUrl;
  @Input() subTitle: string;
  @Input() title: string;
  constructor() { }
  ngOnInit(): void {
  }

}
