import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {}
  //loggedIn: boolean;
  //currentUser$: Observable<User>

  constructor(public accoutnService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accoutnService.currentUser$;
  }

  login() {
    this.accoutnService.login(this.model).subscribe(response => {
      console.log(response);
      //this.loggedIn = true;      
    }, error => {
      console.log(error);
    })    
  }

  logout() {
    this.accoutnService.logout();
    //this.loggedIn = false;
  }

  // getCurrentUser() {
  //   this.accoutnService.currentUser$.subscribe(user => {
  //   //this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
