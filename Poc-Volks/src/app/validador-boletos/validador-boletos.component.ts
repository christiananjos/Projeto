import { Component } from '@angular/core';

@Component({
  selector: 'app-validador-boletos',
  standalone: false,
  templateUrl: './validador-boletos.component.html',
  styleUrl: './validador-boletos.component.css'
})
export class ValidadorBoletosComponent {

  barcode: string = '';

  valor: string = 'R$ 1.329,90';
  vencimento: string = '15/12/2024';
  nomeBeneficiario: string = 'BANCO VOLKSWAGEN S.A';
  codigoBarraboleto: string = '23792374039043769259401011189501799600000136036';

  codigoBarrasValido: boolean = false;

  mensagemErroBoleto: string = 'O código de barras informmado é inválido, apresenta irregularidades ou não foi emitido pela Volkswagen S.A. Por favor, verifique as informações e tente novamente.';

  

  onBarcodeInput(event: any): void {
    const input = event.target.value.replace(/\D/g, '');
    this.barcode = input;
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.codigoBarraboleto).then(() => {
      alert('Código de barras copiado para a área de transferência!');
    }).catch(err => {
      console.error('Erro ao copiar o código de barras: ', err);
    });
  }
}

