import { Component } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { TabsPage } from './tabs/tabs.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage:any = TabsPage;
  isAuth:any;

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, private content: NavController, 
    private menu: MenuController, private router: Router) {
      
      platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  

  onNavigate(pagehome: any) {
    this.router.navigate(["/"+pagehome])
    this.menu.close();
  }

  openMenu() {
    this.menu.open();
  }
}
