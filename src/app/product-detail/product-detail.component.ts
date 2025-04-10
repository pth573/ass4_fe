// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-product-detail',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './product-detail.component.html',
// })
// export class ProductDetailComponent implements OnInit {
//   product: any;

//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit() {
//     const category = this.route.snapshot.paramMap.get('category');
//     const id = this.route.snapshot.paramMap.get('id');

//     const url = `http://127.0.0.1:8000/api/products/${category}/${id}`;
//     this.http.get<any>(url).subscribe(data => {
//       this.product = data;
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product: any;
  selectedQuantity: number = 1;
  category!: string;
  id!: number;
  customerId = 1; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const url = `http://127.0.0.1:8000/api/products/${this.category}/${this.id}`;
    this.http.get<any>(url).subscribe(data => {
      this.product = data;
    });
  }

  addToCart() {
    const payload = {
      customer_id: this.customerId,
      category: this.category,
      product_id: this.id,
      quantity: this.selectedQuantity
    };

    this.http.post('http://127.0.0.1:8000/api/carts/add/', payload)
      .subscribe({
        next: res => {
          alert('✅ Đã thêm vào giỏ hàng thành công!');
          console.log('Phản hồi từ server:', res);
        },
        error: err => {
          alert('❌ Thêm vào giỏ hàng thất bại!');
          console.error(err);
        }
      });
  }
}
