import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-roots',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tumelo George';
  currYear = new Date().getFullYear();
  age = this.currYear - 2001;
  variable = "Jack";
  money = 40;
}
