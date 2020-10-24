import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accoutnService: AccountService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accoutnService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
        console.log(error);
        this.toastr.error(error.error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}