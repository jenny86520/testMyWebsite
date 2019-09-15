import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { // 重導向
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { // 一般路由設定
    path: 'home',
    component: HomeComponent
  },
  { // 子路由
    path: 'myPage',
    children: [
      {
        path: '',
        component: Page1Component,
      },
      {
        path: 'children',
        component: Page2Component
      }
    ]
  },
  { // 萬用路由(包含其餘所有)
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true,  // 開啟路由追蹤
      // useHash: true,        // 開起路徑尾端 hash
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
