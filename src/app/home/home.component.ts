import { Component } from '@angular/core';
import { RecommendationComponent } from '../recommendation/recommendation.component';

@Component({
  selector: 'app-home',
  imports: [RecommendationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
