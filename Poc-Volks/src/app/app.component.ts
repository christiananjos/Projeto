import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export default class AppComponent {
  constructor(private renderer: Renderer2) { }

  flagEmpresa: string = 'carbank';

  ngOnInit() {
    this.alterarEstiloETexto(this.flagEmpresa);
  }

  alterarEstiloETexto(flagEmpresa: string): void {
    switch (flagEmpresa) {
      case 'volks':
        this.volks();
        break;
      case 'porsche':
        this.porsche();
        break;
      case 'carbank':
        this.carbank();
        break;
      default:
        this.volks();
        console.warn('Empresa não encontrada');
    }
  }


  private volks(): void {

    this.alterarHeader('https://www.basketball-loewen.de/wp-content/uploads/2022/12/VWFS_LOGO-980-e1671006285144.jpg', '#095b73');
    this.alterarFooter('#095b73');
    

  }
  private porsche(): void {

    this.alterarHeader('https://logodownload.org/wp-content/uploads/2021/02/porsche-logo-0.png', '#000000');
    this.alterarFooter('#403F44');
   
  }

  private carbank(): void {
    this.alterarHeader('https://cdn.bancovw.com.br/cdn/whitelabel/whl6100000/logoCarBankTransp.png', '#00984A');
    this.alterarFooter('#00984A');
  }

  private alterarHeader(imgSource: string, rgbCorFonte: string): void {
    const header = document.querySelector('app-header');

    if (header) {
      
      const imgLogo = header.querySelector('#imgLogo');
      if (imgLogo) {
        this.renderer.setAttribute(imgLogo, 'src', imgSource);
      }
      const headerFull = header.querySelector('.header');
      if (headerFull) {
        this.renderer.setStyle(headerFull, 'color', rgbCorFonte);
      }
    // const styleElement = document.createElement('style');
    // styleElement.innerHTML = `
    //   * {
    //     font-family: Arial, sans-serif;
    //     color: ${rgbCorFonte}
    //   }`;

    // this.renderer.appendChild(header, styleElement);
    }
  }

  private alteraCorFonte(): void {
    //1 - Alterar a cor da fonte geral'
  }


  private alteraImagensCarousel(): void {
    //2 - Alterar as imagens do carousel para cada marca
  }
  private alteraTextoSubmenuProtege(): void {
    //3 - Alterar texto submenu Seguros e Serviços > Vw Protege / Porsche Protege / Carbank Protege
    //3.1 Alterar o texto do cabeçalho para cada marca.
    //3.2 Alterar a imagem do cabeçalho para cada marca.
  }

  private alteraTextoBeneficiarioValidorBoletos(): void {
    //4 - Alterar o modal do validador de boletos com o beficiário de acordo com a marca (valido e invalido)
  }





  private alterarFooter(codigoRGB: string): void {
    const footer = document.querySelector('app-footer-base');
    if (footer) {
      const footerFull = footer.querySelector('.footer-full');
      if (footerFull) {
        this.renderer.setStyle(footerFull, 'background-color', codigoRGB);
      }
    }
  }


  // private alterarSidebar(): void {
  //   const sidebar = document.querySelector('app-sidebar');
  //   if (sidebar) {
  //     this.renderer.setStyle(sidebar, 'background-color', 'green');
  //     this.renderer.setProperty(sidebar, 'innerText', 'Novo Texto do Sidebar');
  //   }
  // }
}
