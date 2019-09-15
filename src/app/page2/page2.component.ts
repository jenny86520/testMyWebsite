import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  id: string;
  queryid: string;
  constructor(private route: ActivatedRoute) {
    // 使用路徑參數
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });
    // 使用查詢參數
    this.route.queryParamMap.subscribe(queryParam => {
      this.queryid = queryParam.get('id');
    });
  }

  ngOnInit() {
  }

}
