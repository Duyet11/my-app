import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../types/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = {
    _id: '',
    fullname: '',
    email: '',
    password: '',
  };

  authService = inject(AuthService);
  router = inject(Router);

  handleSubmitForm() {
    if (!this.user.email || !this.user.password)
      return alert('Please fill email and password');
      this.authService.login(this.user).subscribe((res) => {
      sessionStorage.setItem('token', JSON.stringify(res.token));
      this.router.navigate(['/admin/products']);
    });
  }
}