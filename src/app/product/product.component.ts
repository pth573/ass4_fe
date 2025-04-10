// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-product',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './product.component.html',
// })
// export class ProductComponent implements OnInit {
//   products: any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.http.get<any>('http://127.0.0.1:8000/api/products/')
//       .subscribe(data => {
//         console.log('Dữ liệu sản phẩm nhận được:', data); // Log nguyên gốc

//         // Gộp tất cả danh mục lại thành một mảng
//         const merged = [
//           ...data.books,
//           ...data.clothes,
//           ...data.laptops,  
//           ...data.mobiles
//         ];

//         console.log('Dữ liệu sản phẩm nhận được3:', merged);
//         // Ánh xạ thêm trường image
//         this.products = merged.map(item => ({
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity,
//           image: 'https://thuviensach.vn/img/news/2023/06/larger/14027-chu-be-mang-pyjama-soc-1.jpg?v=3672'
//         }));

//         console.log('Danh sách sản phẩm sau xử lý:', this.products); // Log danh sách cuối
//       });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}


  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/api/products/')
      .subscribe(data => {
        console.log('Dữ liệu sản phẩm nhận được:', data);

        const merged = [
          ...(data.books ?? []).map((item: any) => ({ ...item, category: 'books' })),
          ...(data.clothes ?? []).map((item: any) => ({ ...item, category: 'clothes' })),
          ...(data.laptops ?? []).map((item: any) => ({ ...item, category: 'laptops' })),
          ...(data.mobiles ?? []).map((item: any) => ({ ...item, category: 'mobiles' }))
        ];
        

        this.products = merged.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          category: item.category,
          image: 'https://cdn.tgdd.vn/Files/2016/04/23/819804/anhpanorama6-600x400.jpg'
        }));

        console.log('Danh sách sản phẩm sau xử lý:', this.products);
      });
  }

  viewDetail(category: string, id: number) {
    this.router.navigate(['/products', category, id]);
  }
}
