import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  user: string;
  repo: string;

  constructor() { }

  ngOnInit() {
    this.user = "faustoposso"
    this.repo = "github-app"
  }

}
