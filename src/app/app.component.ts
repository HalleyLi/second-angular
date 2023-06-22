import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService, UserInfo } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.login({ username: 'test-trader', password: '123456' })
    .subscribe((account: UserInfo)=>{
      sessionStorage.setItem('Authorization', `Bearer ${account.token}`);
    });
    this.appService.getHeroes();
    this.appService.getBwics();
  }
  title = 'second-angular';
}
