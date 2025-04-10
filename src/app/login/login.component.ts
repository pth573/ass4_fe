import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const url = 'http://127.0.0.1:8000/api/customers/login/'; // Đổi URL nếu API khác
    this.http.post(url, this.user).subscribe({
      next: (res) => {
        alert('Đăng nhập thành công!');
        this.router.navigate(['/']); // chuyển về trang chủ
      },
      error: () => alert('Sai tài khoản hoặc mật khẩu!')
    });
  }
}