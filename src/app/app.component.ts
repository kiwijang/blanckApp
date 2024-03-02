import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { BASE_PATH } from './variable';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HttpClientModule],
  providers: [
    {
      provide: BASE_PATH,
      useValue: `${environment.basePath}`,
    },
  ],
})
export class AppComponent {
  constructor() {}
}
