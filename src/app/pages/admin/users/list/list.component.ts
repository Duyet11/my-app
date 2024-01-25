import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../types/User';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  userService = inject(UserService); // inject vao bien

  userList: User[] = [];

  ngOnInit(): void {
    this.userService
      .getUserListAdmin()
      .subscribe((users) => (this.userList = users)); // callApi.then(cb fuc)
  }
  handleDeleteUser(id: string) {
    if (window.confirm('Do you really remove product?')) {
    }
  }
}