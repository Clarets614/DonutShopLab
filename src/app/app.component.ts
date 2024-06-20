import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DonutsComponent, HeaderComponent, DonutDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutShop';
}
