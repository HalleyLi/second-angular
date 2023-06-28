import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService, UserInfo } from './app.service';
import { AuthService } from './DI/angular/auth.service';
import { UserService } from './DI/angular/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title ='Standar Angular';
  constructor(private appService: AppService,
     private authService: AuthService,
     private userService: UserService) {}

  ngOnInit(): void {
    this.appService.login({ username: 'test-trader', password: '123456' })
    .subscribe((account: UserInfo)=>{
      sessionStorage.setItem('Authorization', `Bearer ${account.token}`);
    });
    this.appService.getHeroes();
    this.appService.getBwics();

    this.authService.setAuth(['read', 'write'],'ZZ0001');
    this.userService.checkPermission()
  }
}
