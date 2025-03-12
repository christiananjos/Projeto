import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export default class AppComponent {
  constructor(private renderer: Renderer2) {}


flagEmpresa: string = 'volks';


//1 - Alterar a cor da fonte geral, cor do footer
//2 - Alterar as imagens do carousel para cada marca
//3 - Alterar texto submenu Seguros e Serviços > Vw Protege / Porsche Protege / Carbank Protege
 //3.1 Alterar o texto do cabeçalho para cada marca.
 //3.2 Alterar a imagem do cabeçalho para cada marca.
//4 - Alterar o modal do validador de boletos com o beficiário de acordo com a marca (valido e invalido)

  alterarEstiloETexto(flagEmpresa: string): void {
    switch (flagEmpresa) {
      case 'volks':
        this.alterarParaVolks();
        break;
      case 'porsche':
        this.alterarParaPorsche();
        break;
      case 'carbank':
        this.alterarParaCarbank();
        break;
      default:
        console.warn('Empresa não encontrada');
    }
  }


  private alterarParaVolks(): void {}
  private alterarParaPorsche(): void {}
  private alterarParaCarbank(): void {}


  private alterarHeader(): void {
    const header = document.querySelector('app-header');
    if (header) {
      this.renderer.setStyle(header, 'background-color', 'blue');
      this.renderer.setProperty(header, 'innerText', 'Novo Texto do Header');
    }
  }

  private alterarSidebar(): void {
    const sidebar = document.querySelector('app-sidebar');
    if (sidebar) {
      this.renderer.setStyle(sidebar, 'background-color', 'green');
      this.renderer.setProperty(sidebar, 'innerText', 'Novo Texto do Sidebar');
    }
  }

  private alterarFooter(): void {
    const footer = document.querySelector('app-footer-base');
    if (footer) {
      this.renderer.setStyle(footer, 'background-color', 'red');
      this.renderer.setProperty(footer, 'innerText', 'Novo Texto do Footer');
    }
  }
}
