import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { GetDataService } from 'src/app/shared/services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faLongArrowAltRight = faLongArrowAltRight;
  getLatestNewsData: Array<{}>;
  constructor(private service: GetDataService) {
    this.getLatestNews()
  }

  getLatestNews() {
    this.service.getAllData().subscribe(response => {
      this.getLatestNewsData = this.service.sortFuncbyNewDate(response['articles'],'publishedAt')
      this.getLatestNewsData = this.getLatestNewsData.filter(res => res['showOnHomepage'] == true);
      this.getLatestNewsData = this.getLatestNewsData.slice(0, 6);
    });
  }

  ngOnInit(): void {
  }



}
