import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accoutnService: AccountService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accoutnService.currentUser$;
  }

  login() {
    this.accoutnService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
      //this.loggedIn = true;      
    })    
  }

  logout() {
    this.accoutnService.logout();
    this.router.navigateByUrl('/');
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
