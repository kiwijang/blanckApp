import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,
  IonLabel,
  IonItem,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonIcon,
  IonNav,
  IonNavLink,
  InfiniteScrollCustomEvent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
  IonGrid,
} from '@ionic/angular/standalone';
import { BulletinDetailComponent } from '../bulletin-detail/bulletin-detail.component';
import { BulletinItem } from '../data';

@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonListHeader,
    IonSkeletonText,
    IonThumbnail,
    IonLabel,
    IonItem,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
    IonIcon,
    IonNav,
    IonNavLink,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonButton,
    IonGrid,
    CommonModule,
    FormsModule,
  ],
})
export class BulletinListComponent implements OnInit {
  bulletinDetailComp = BulletinDetailComponent;
  loaded = true;
  showButton = false;

  readonly allData: BulletinItem[] = [
    { title: '公告標題 01', createdAt: 1703496488777, content: '公告01的內文' },
    { title: '公告標題 02', createdAt: 1703496488777, content: '公告02的內文' },
    { title: '公告標題 03', createdAt: 1703496488777, content: '公告03的內文' },
    { title: '公告標題 04', createdAt: 1703496488777, content: '公告04的內文' },
    { title: '公告標題 05', createdAt: 1703496488777, content: '公告05的內文' },
    { title: '公告標題 06', createdAt: 1703496488777, content: null },
    { title: '公告標題 07', createdAt: 1703496488777, content: null },
    { title: '公告標題 08', createdAt: 1703496488777, content: null },
    { title: '公告標題 09', createdAt: 1703496488777, content: null },
    { title: '公告標題 10', createdAt: 1703496488777, content: null },
    { title: '公告標題 11', createdAt: 1703496488777, content: '公告01的內文' },
    { title: '公告標題 12', createdAt: 1703496488777, content: '公告02的內文' },
    { title: '公告標題 13', createdAt: 1703496488777, content: '公告03的內文' },
    { title: '公告標題 14', createdAt: 1703496488777, content: '公告04的內文' },
    { title: '公告標題 15', createdAt: 1703496488777, content: '公告05的內文' },
    { title: '公告標題 16', createdAt: 1703496488777, content: null },
    { title: '公告標題 17', createdAt: 1703496488777, content: null },
    { title: '公告標題 18', createdAt: 1703496488777, content: null },
    { title: '公告標題 19', createdAt: 1703496488777, content: null },
    { title: '公告標題 20', createdAt: 1703496488777, content: null },
  ];
  datas: BulletinItem[] = [];
  loadedItems: BulletinItem[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // 使用 sort 方法對 data 進行排序
    this.datas = [...this.allData].sort((a, b) => b.createdAt - a.createdAt);
    this._renderData();
  }

  /**
   * 取得列表
   * @param startIndex 開始 Index  預設 0
   * @param count 一次幾筆 預設 5
   * @returns 列表
   */
  private _getItemsByStartIndex(startIndex = 0, count = 5) {
    return this.datas.slice(startIndex, startIndex + count);
  }

  private _renderData() {
    const startIndex = this.loadedItems.length;
    // 若以載入全資料則停止載入
    if (startIndex === this.allData.length) {
      this.showButton = false;
      return;
    }
    // 顯示載入更多
    this.showButton = true;

    // 更新列表
    this.loadedItems = this.loadedItems.concat(
      this._getItemsByStartIndex(startIndex, 5)
    );

    // 手動觸發變更檢測
    this.cdr.detectChanges();
  }

  /**
   * 點擊按鈕和 scroll 時觸發
   * @param ev
   */
  loadMoreData(ev: InfiniteScrollCustomEvent | any) {
    this._renderData();

    // 檢查 ev.target 是否存在且具有 complete 方法
    if (ev && ev.target && typeof ev.target.complete === 'function') {
      // 完成異步操作後通知 Infinite Scroll 完成
      ev.target.complete();
    }
  }
}
