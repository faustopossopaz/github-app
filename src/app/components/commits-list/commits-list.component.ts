import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss'],
})
export class CommitsListComponent implements OnInit {
  moment: any = moment;
  commitsList: Array<any> = [];
  showTable: boolean = false;
  showPullToRefresh: boolean = false;
  pullToRefresh: boolean = true;
  catchError: string;

  constructor(private githubService: GithubService, public alertController: AlertController) { }

  ngOnInit() {
  }

  getCommitsList() {  
    this.pullToRefresh = false;
      
    this.githubService.getCommitsList().subscribe( 
      (data:any) => {
        this.showTable = true;
        // setTimeout(_=>{
          this.showPullToRefresh = true;
        // },500);
        this.commitsList = data;
        return this.commitsList;
      },
      (err) => {
      this.catchError = err.error.message;
      this.showPullToRefresh = false;
      this.showTable = false;
      this.presentAlert();
      })  
  }

  doRefresh(event) {
    document.getElementsByTagName('ion-refresher')[0].style.display = "block";
    setTimeout(() => {
      event.target.complete();
      document.getElementsByTagName('ion-refresher')[0].style.display = "none";
      this.getCommitsList();
    }, 1000);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dear user',
      subHeader: 'An error has occurred',
      message: `Repo ${this.catchError}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
