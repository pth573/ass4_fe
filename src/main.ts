import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // file định nghĩa routes
import { provideHttpClient } from '@angular/common/http'; // 👈 Thêm dòng này

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // 👈 Thêm dòng này
  ]
});
