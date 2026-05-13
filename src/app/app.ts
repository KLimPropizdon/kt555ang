// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Импорт для <router-outlet>
import { HeaderComponent } from './shared/header/header.component'; // <-- Импорт хедера
import { FooterComponent } from './shared/footer/footer.component'; // <-- Импорт футера

@Component({
  selector: 'app-root',
  standalone: true, // <-- Делаем его автономным
  imports: [
    RouterModule,    
    HeaderComponent, 
    FooterComponent  
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
}