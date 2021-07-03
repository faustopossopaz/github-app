import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'

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
    this.user = environment.user
    this.repo = environment.repo
  }
  

}
