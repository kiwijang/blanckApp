import { Component, Input } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { BulletinItem } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bulletin-detail',
  templateUrl: './bulletin-detail.component.html',
  styleUrls: ['./bulletin-detail.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    CommonModule,
  ],
})
export class BulletinDetailComponent {
  @Input() item: BulletinItem | null = null;

  constructor() {}
}
