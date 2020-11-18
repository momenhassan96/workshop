import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get('../../../assets/server/newsapi.json');
  }

  sortFuncbyNewDate(data,propertyName:string) {
    return  data.sort((a, b) => { new Date(a[propertyName]).getTime() - new Date(b[propertyName]).getTime() })
  }
}
