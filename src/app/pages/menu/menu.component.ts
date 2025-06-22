import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  userHtml: string = '';

  constructor(
      private router: Router,
      private loginService: LoginService
    ){}

  ngOnInit() {
    const username = sessionStorage.getItem('username');
    if (username) {
      this.userHtml = username;
    }
  }

  transferMoney(){
    alert("Function not implemented");
  }

  extract(){
    alert("Function not implemented");

  }

  loan(){
    alert("Function not implemented");

  }

  pointsWithPeople(){
    alert("Function not implemented");

  }

  mail(){
    alert("Function not implemented");

  }

  accessAccount(){
    alert("Function not implemented");
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(["/login"])
  }
}
