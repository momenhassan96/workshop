import { Pipe, PipeTransform } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  allData: Array<{}>;
  constructor(private service: GetDataService) {
    this.service.getAllData().subscribe(response => this.allData = response['articles']);
  }
  transform(value: Array<{}>, searchText: string, id: number | string, clicked: boolean): any {
    if (searchText && id && clicked) {
      const _newInstance = this.allData.filter(item => {
        if (Object.values(item).toString().toLowerCase().includes(searchText.toLowerCase()) && item['sourceID'] == id) {
          return item;
        }
      })
      value = _newInstance;
      return value;
    }else if(searchText && clicked){
      const _newInstance = this.allData.filter(item => {
        if (Object.values(item).toString().toLowerCase().includes(searchText.toLowerCase())) {
          return item;
        }
      })
      value = _newInstance
      return value;
    }else{
      return value;
    }
  }
};
