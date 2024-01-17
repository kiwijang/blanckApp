import { BulletinListComponent } from './../../component/bulletin-list/bulletin-list.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonNav, IonSkeletonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.page.html',
  styleUrls: ['./bulletin.page.scss'],
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
    CommonModule,
    FormsModule,
  ],
})
export class BulletinPage {
  bulletinListComp = BulletinListComponent;
}
