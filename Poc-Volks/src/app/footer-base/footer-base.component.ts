import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-base',
  standalone: false,
  templateUrl: './footer-base.component.html',
  styleUrl: './footer-base.component.css'
})
export class FooterBaseComponent {
 textoMarca =  ''

 ngOnInit() {
  const currentYear = new Date().getFullYear();
  this.textoMarca = `${currentYear} Volkswagen Financial Services | `;
}

}
