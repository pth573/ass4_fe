import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Để dùng routerLink

@Component({
  selector: 'app-tabbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.css'
})
export class TabbarComponent {}
