import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  customer_id!: number;
  category!: string;
  product_id!: number;

  rating: number = 5;
  comment: string = '';
  successMessage = 'Đánh giá thành công';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.customer_id = +params['customer_id'];
      this.category = params['category'];
      this.product_id = +params['product_id'];
    });
  }

  submitReview() {
    const reviewData = {
      customer_id: this.customer_id,
      category: this.category,
      product_id: this.product_id,
      rating: this.rating,
      comment: this.comment
    };

    this.http.post('http://127.0.0.1:8000/api/reviews/add/', reviewData).subscribe({
      next: (response) => {
        this.successMessage = '🎉 Đánh giá của bạn đã được gửi thành công!';
        this.comment = '';
        this.rating = 5;
      },
      error: (error) => {
        console.error('Lỗi khi gửi đánh giá:', error);
      }
    });
  }
}
