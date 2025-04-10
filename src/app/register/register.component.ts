import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customer = {
    username: '',
    password: '',
    full_name: {
      first_name: '',
      last_name: ''
    },
    address: {
      street: '',
      city: '',
      state: '',
      zip_code: ''
    },
    email: '',
    phone: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const url = 'http://127.0.0.1:8000/api/customers/register/';
    this.http.post(url, this.customer).subscribe({
      next: () => alert('Đăng ký khách hàng thành công!'),
      error: (err) => {
        console.error(err);
        alert('Có lỗi xảy ra khi đăng ký!');
      }
    });
  }
}
