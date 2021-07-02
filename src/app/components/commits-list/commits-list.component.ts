import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss'],
})
export class CommitsListComponent implements OnInit {
  commitsList: Array<any> = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getCommitsList();
  }

  getCommitsList() {  
    this.githubService.getCommitsList().subscribe( 
      (data:any) => {
        this.commitsList = data;
        console.log(this.commitsList)

      },
      (err) => {
       console.log(err)
       alert(err.error.message)
      })  
  }

}
