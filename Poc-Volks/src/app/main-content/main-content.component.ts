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
    this.getFontColor('atualizacaoCadastral');
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
      element.style.color = '#3CBE00';
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

  getFontColor(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const fontColor = window.getComputedStyle(element).color;
      console.log(`The font color of the element with id ${elementId} is ${fontColor}`);
      this.changeButtonBackgroundColor(fontColor);
    }
  }

  changeButtonBackgroundColor(newColor: string) {
    const buttons = document.getElementsByClassName('button-style');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i] as HTMLElement;
      button.style.backgroundColor = newColor;
    }
  }

}
