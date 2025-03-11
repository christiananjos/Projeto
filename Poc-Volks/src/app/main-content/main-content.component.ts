import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: false,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  showSaldo = true;
  showEmAtraso = true;
  txtEmAtraso: string = '';

  toggleSaldo() {
    this.showSaldo = !this.showSaldo;
  }

  ngOnInit() {
    this.validateOnLoad();
  }

  validateOnLoad() {
    if (this.showEmAtraso == false) {
      this.txtEmAtraso = "EM DIA";
      this.changeFontColorToGreen();
      this.DesabilitaDivMensagemCobranca();
    } else {
      this.changeFontColorToRed();
      this.txtEmAtraso = "EM ATRASO";
      this.HabilitaDivMensagemCobranca();

     
    }
  }

  changeFontColorToRed() {
    const iconElement = document.getElementById('iconeStatusPagamento');
    if (iconElement) {
      iconElement.style.color = 'red';
    }
    const element = document.getElementById('statusContrato');
    if (element) {
      element.style.color = 'red';

    }
  }

  changeFontColorToGreen() {
    const element = document.getElementById('statusContrato');
    if (element) {
      element.style.color ='#3CBE00';
    }
  }

  DesabilitaDivMensagemCobranca() {
    const element = document.getElementById('divMensagemCobranca');
    if (element) {
      element.style.display = 'none';
    }
  }

  HabilitaDivMensagemCobranca() {
    const element = document.getElementById("divMensagemCobranca");
    if (element) {
      element.style.display = 'block';
    }
  }
  
}
