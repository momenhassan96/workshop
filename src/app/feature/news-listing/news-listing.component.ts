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
  firstItemsDisplay: Array<{}>
  showMoreBut = true;
  lengthOfArray: number;
  getDataDisplayLength: number;
  faLongArrowAltRight = faLongArrowAltRight;
  clickedToSearch:boolean;
  _data: Array<{}>;
  ngOnInit(): void {
    this.service.getAllData().subscribe(response => {
      this.categoryList = response['sourceCategory'];
      this.allData = this.service.sortFuncbyNewDate(response['articles'], 'publishedAt');
      this.firstItemsDisplay = this.allData.slice(0, 6);
      this.lengthOfArray = this.allData.length;
      this.clickedToSearch = false;
    });
  }

  filterData(formValue) {
    this.clickedToSearch = true;
  }

  enterClicked($event, formValue) {
    if ($event.code === 'Enter') {
      this.filterData(formValue);
    }
  }

  loadMore() {
      this.getDataDisplayLength = this.firstItemsDisplay.length;
      const newDispaly = this.getDataDisplayLength + 6;
      const checked = this.lengthOfArray - newDispaly;
      if (checked % 2 === 0) {
        this.firstItemsDisplay = [];
        const newArr = this.allData.slice(0, newDispaly).reverse();
        newArr.forEach(ietm => { this.firstItemsDisplay.push(ietm); });
      } else {
        const newArr = this.allData.slice(0, this.lengthOfArray).reverse();
        newArr.forEach(ietm => { this.firstItemsDisplay.push(ietm); });
      }
    }
  }
