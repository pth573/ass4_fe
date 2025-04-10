// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-order',
//   imports: [],
//   templateUrl: './order.component.html',
//   styleUrl: './order.component.css'
// })
// export class OrderComponent {

// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // ✅ Thêm dòng này
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  customerId = 1;  // Có thể nhận từ Auth hoặc localStorage
  orderInfo: any = null;
  errorMessage: string = '';
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.createOrder();
  }

  createOrder(): void {
    this.isLoading = true;
    this.http.post(`http://127.0.0.1:8000/api/orders/${this.customerId}/create/`, {})
      .subscribe({
        next: (data: any) => {
          this.orderInfo = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = err.error?.error || 'Không thể tạo đơn hàng.';
          this.isLoading = false;
        }
      });
  }
}
