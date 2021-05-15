import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController, NavParams } from '@ionic/angular';
import { Appareil } from '../model/appareil';
import { AppareilsService } from '../services/appareils.service';


@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

  appareilsList: Appareil[];
  listevide: any
  appareil: string = this.route.snapshot.params.name;

  constructor(public navCtrl:NavController, public service:AppareilsService,
     public route: ActivatedRoute, private menu: MenuController) {}

  

  ngOnInit() {
    this.showAllAppareils();
  }

  openMenu() {
    this.menu.open();
  }

  onLoadAppareil(id:number) {
    this.navCtrl.navigateForward(["/single-appareil/"+id]);
  }

  showAllAppareils(){
    this.service.getAppareils().subscribe(
      (data)=>{
        this.listevide=data
      }
    )

  }

}
