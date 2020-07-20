import { Component, OnInit } from '@angular/core';
import { Idata } from '../models/Idata';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    public users: Idata[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(data=> (this.users = data ));
  }

}