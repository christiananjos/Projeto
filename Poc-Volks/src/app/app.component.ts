import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Poc-Volks'
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
