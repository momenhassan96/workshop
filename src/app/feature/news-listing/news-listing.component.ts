import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { GetDataService } from 'src/app/shared/services/get-data.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {

  constructor(private service: GetDataService) { }
  selectedCategory = "";
  selectedToDate = "";
  selectedFromDate = "";
  searchText = "";
  allData: Array<{}>;
  dataToShow: Array<{}>;
  categoryList: Array<{}>;
  showMoreBut = true;
  getDataDisplayLength: number;
  faLongArrowAltRight = faLongArrowAltRight;
  clickedToSearch: boolean;
  percentage = 0;
  page = 1;
  pageSize = 12;
  legnthOfData: number = 0;
  _data: Array<{}>;
  ngOnInit(): void {
    this.getALlData();
  }

  getALlData() {
    this.service.getAllData().subscribe(response => {
      this.categoryList = response['sourceCategory'];
      this.allData = this.service.sortFuncbyNewDate(response['articles'], 'publishedAt');
      this._data = [...this.allData];
      this.legnthOfData = this.allData.length;
    });
  }
  filterData(searchText, selectedCategory, toDate, fromDate) {
    this.percentage = 0;
    if (selectedCategory && toDate && fromDate) {
      this.allData = this._data.filter(item => {
        const getToDate = new Date(`${toDate.year}-${toDate.month}-${toDate.day}`);
        const getFromDate = new Date(`${fromDate.year}-${fromDate.month}-${fromDate.day}`);
        const getPublishedAt = new Date(item['publishedAt']);
        if (Object.values(item).toString().toLowerCase().includes(searchText.toLowerCase()) && item['sourceID'] == selectedCategory && (getPublishedAt <= getToDate && getPublishedAt >= getFromDate)) {
          debugger;
          return item;
        }
      })
    }
  };

  asc() {
    this.allData.sort((a, b) => a['title'] > b['title'] ? 1 : -1);
  }

  dsc() {
    this.allData.sort((a, b) => a['title'] > b['title'] ? -1 : 1);
  }
}
