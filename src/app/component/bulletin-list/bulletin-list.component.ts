import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { AnnouncementService } from 'src/app/service/announcement.service';

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
  providers: [AnnouncementService],
})
export class BulletinListComponent implements OnInit {
  bulletinDetailComp = BulletinDetailComponent;
  loaded = true;
  showButton = false;

  allData: BulletinItem[] = [];
  datas: BulletinItem[] = [];
  loadedItems: BulletinItem[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit() {
    this.announcementService.getAnnouncement().subscribe((res) => {
      this.allData = res.map((x: any) => {
        return {
          title: x.password,
          content: x.password,
          createdAt: x.currentNumber,
        };
      });
      // 使用 sort 方法對 data 進行排序
      this.datas = [...this.allData].sort((a, b) => b.createdAt - a.createdAt);
      this._renderData();
    });
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
