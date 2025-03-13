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
    this.marcas(this.flagEmpresa);
  }

  marcas(flagEmpresa: string): void {
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
    }
  }


  private volks(): void {
    this.alteraCorFonte('#095b73');
    this.alteraLogoHeader('https://www.basketball-loewen.de/wp-content/uploads/2022/12/VWFS_LOGO-980-e1671006285144.jpg');
    this.alteraBackgroundColorFooter('#095b73');
    this.alteraCorFonte('#095b73')


  }
  private porsche(): void {
    this.alteraCorFonte('#000000');
    this.alteraLogoHeader('https://logodownload.org/wp-content/uploads/2021/02/porsche-logo-0.png');
    this.alteraBackgroundColorFooter('#403F44');
    this.alteraCorFonte('#403F44')

  }

  private carbank(): void {
    this.alteraCorFonte('#00984A');
    this.alteraLogoHeader('https://cdn.bancovw.com.br/cdn/whitelabel/whl6100000/logoCarBankTransp.png');
    this.alteraBackgroundColorFooter('#00984A');
    this.alteraCorFonte('#00984A')
  }

  private alteraLogoHeader(imgSource: string): void {
    const header = document.querySelector('app-header');

    if (header) {

      const imgLogo = header.querySelector('#imgLogo');
      if (imgLogo) {
        this.renderer.setAttribute(imgLogo, 'src', imgSource);
      }
    }
  }

  private alteraBackgroundColorFooter(codigoRGB: string): void {
    const footer = document.querySelector('app-footer-base');
    if (footer) {
      const footerFull = footer.querySelector('.footer-full');
      if (footerFull) {
        this.renderer.setStyle(footerFull, 'background-color', codigoRGB);
      }
    }
  }

  private alteraCorFonte(rgbCorFonte: string): void {
    const sidebar = document.querySelector('app-root');
    if (sidebar) {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
        * {
          color: ${rgbCorFonte};
        }
      `;
      this.renderer.appendChild(sidebar, styleElement);
    }
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
}
