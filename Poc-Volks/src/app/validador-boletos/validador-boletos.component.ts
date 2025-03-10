import { Component } from '@angular/core';

@Component({
  selector: 'app-validador-boletos',
  standalone: false,
  templateUrl: './validador-boletos.component.html',
  styleUrl: './validador-boletos.component.css'
})
export class ValidadorBoletosComponent {

  barcode: string = '';

  onBarcodeInput(event: any): void {
    const input = event.target.value.replace(/\D/g, '');
    this.barcode = input;
  }
}
