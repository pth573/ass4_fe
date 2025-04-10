import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { ProductComponent } from "./product/product.component";
import { RecommendationComponent } from './recommendation/recommendation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, TabbarComponent, ProductComponent, RecommendationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
