import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';
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

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  getCommitsList() {  
    this.pullToRefresh = false;
    setTimeout(_=>{
      this.showTable = true;
      this.showPullToRefresh = true;
    },500)
  
    this.githubService.getCommitsList().subscribe( 
      (data:any) => {
        this.commitsList = data;
        return this.commitsList;
      },
      (err) => {
       console.log(err)
       alert(err.error.message)
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
}
