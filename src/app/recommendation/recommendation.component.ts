// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-recommendation',
//   imports: [],
//   templateUrl: './recommendation.component.html',
//   styleUrl: './recommendation.component.css'
// })
// export class RecommendationComponent {

// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recommendations: any[] = [];
  customerId: number = 1; // Hoặc lấy từ route, input, v.v.

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(`http://127.0.0.1:8000/api/recommendations/${this.customerId}`)
      .subscribe({
        next: (data) => {
          this.recommendations = data.recommendations || [];
        },
        error: (err) => {
          console.error('Lỗi khi lấy gợi ý:', err);
        }
      });
  }
}
