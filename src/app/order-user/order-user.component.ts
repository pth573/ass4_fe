// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-order-user',
//   imports: [],
//   templateUrl: './order-user.component.html',
//   styleUrl: './order-user.component.css'
// })
// export class OrderUserComponent {

// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {
  orders: any[] = [];
  customerId: number = 1;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    const url = `http://127.0.0.1:8000/api/orders/${this.customerId}/`;
    this.http.get<any[]>(url).subscribe(
      (response) => this.orders = response,
      (error) => console.error('Lỗi khi tải đơn hàng:', error)
    );
  }

  goToReview(customer_id: number, category: string, product_id: number) {
    this.router.navigate(['/review'], {
      queryParams: {
        customer_id,
        category,
        product_id
      }
    });
  }
}