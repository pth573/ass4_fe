// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   imports: [],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  customerId = 1; // Bạn có thể lấy từ localStorage khi có auth
  cartItems: any[] = [];
  customerInfo: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const url = `http://127.0.0.1:8000/api/carts/${this.customerId}/`;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.customerInfo = res.customer;
        this.cartItems = res.cart;
      },
      error: (err) => {
        alert('Lỗi khi tải giỏ hàng!');
        console.error(err);
      }
    });
  }

  goToOrder(): void {
    this.router.navigate(['/order']);
  }
}
