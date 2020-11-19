import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crump',
  templateUrl: './bread-crump.component.html',
  styleUrls: ['./bread-crump.component.scss']
})
export class BreadCrumpComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
