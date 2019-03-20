import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private aut:AuthService ) {
      this.aut.handleAuthentication();
    }

  ngOnInit() {
  }

  login(){
      this.aut.login();
  }

  logout(){
      this.aut.logout();
  }

  isAuthenticated(){
      this.aut.isAuthenticated();
  }

}
