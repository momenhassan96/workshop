import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/shared/services/get-data.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  getDetail: Array<{}>;
  idParam: number;
  item: object;
  relatedTopics: Array<{}>;
  constructor(private activatedRoute: ActivatedRoute, private service: GetDataService) {
    this.idParam = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.service.getAllData().subscribe(response => {
      this.getDetail = response['articles'].filter(item => item['id'] == this.idParam);
      this.item = this.getDetail[0];
    })

    this.relatedTopics = [
      { imgUrl: '../../../assets/images/related-topics1.png', subTitle: 'category', title: 'New Artificial Intelligence Apps' },
      { imgUrl: '../../../assets/images/related-topics2.png', subTitle: 'category', title: 'Technology Development Seminar' },
      { imgUrl: '../../../assets/images/related-topics.png', subTitle: 'category', title: 'Next Step Of IOT [Internet Of Things]'}
    ]
  }

}
