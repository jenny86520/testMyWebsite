import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  inputString: string = 'akaSchool';
  id = '123';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // 任務3 解答
  showMessage(message: string) {
    this.inputString = message;
  }
  // 路由
  goToPage2ByUrl() {
    this.router.navigateByUrl('myPage/children');
  }

  goToPage2ByArray() {
    this.router.navigate(['myPage', 'children']);
  }
  // 帶參數路由
  goToPage2() {
    this.router.navigate(['myPage', 'children', this.id]);
  }
  // 影藏路由
  goToPage2HidePath() {
    this.router.navigate(['myPage', 'children', this.id], { skipLocationChange: true });
  }

  // 任務4 解答
  goToPage2WithInput(inputString: string) {
    this.router.navigate(['myPage', 'children', inputString], { skipLocationChange: true });
  }
}
