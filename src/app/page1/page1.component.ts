import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  inputString: string = 'akaSchool';
  constructor() { }

  ngOnInit() {
  }

  // 任務3 解答
  showMessage(message: string) {
    this.inputString = message;
  }
}
