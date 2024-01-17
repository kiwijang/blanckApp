import { Routes } from '@angular/router';
import { TabsComponent } from './component/tabs/tabs.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      // 主頁
      {
        path: 'home',
        loadComponent: () =>
          import('./page/home/home.page').then((c) => c.HomePage),
      },
      // 公告
      {
        path: 'bulletin',
        loadComponent: () =>
          import('./page/bulletin/bulletin.page').then((c) => c.BulletinPage),
      },
    ],
  },
];
