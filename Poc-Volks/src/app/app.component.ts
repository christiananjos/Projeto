import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export default class AppComponent {
  constructor(private renderer: Renderer2) { }

  flagEmpresa: string = 'volks';
  fonteColor: string = '';
  //porsche
  //carbank

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
    this.fonteColor = '#095b73';


    this.alteraCorFonte(this.fonteColor);
    this.alteraLogoHeader('https://www.basketball-loewen.de/wp-content/uploads/2022/12/VWFS_LOGO-980-e1671006285144.jpg');
    this.alteraCorFonteSidebar(this.fonteColor);
    this.alteraBackgroundColorFooter(this.fonteColor);

  }
  private porsche(): void {
    this.fonteColor = '#000000';

    this.alteraCorFonte(this.fonteColor);
    this.alteraLogoHeader('https://logodownload.org/wp-content/uploads/2021/02/porsche-logo-0.png');
    this.alteraCorFonteSidebar(this.fonteColor);
    this.alteraBackgroundColorFooter('#403F44');
    this.alteraTextoFooter('@ Porsche Financial Services | Todos os direitos reservados.')
    this.DesabilitaVwProtege();


  }

  private carbank(): void {
    this.fonteColor = '#00984A';

    this.alteraCorFonte(this.fonteColor);
    this.alteraLogoHeader('https://cdn.bancovw.com.br/cdn/whitelabel/whl6100000/logoCarBankTransp.png');
    this.alteraCorFonteSidebar(this.fonteColor);
    this.alteraBackgroundColorFooter(this.fonteColor);
    this.alteraTextoFooter('@CarBank Brasil | Todos os direitos reservados.');
    this.DesabilitaVwProtege();
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
    const app = document.querySelector('app-root');
    if (app) {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
        * {
          color: ${rgbCorFonte};
        }
      `;
      this.renderer.appendChild(app, styleElement);
    }
  }

  private alteraCorFonteSidebar(rgbCorFonte: string): void {
    const app = document.querySelector('app-sidebar');
    if (app) {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
        * {
          color: ${rgbCorFonte};
        }
      `;
      this.renderer.appendChild(app, styleElement);
    }
  }

  private alteraTextoFooter(marca: string): void {
    const app = document.querySelector('app-footer-base');
    if (app) {
      const footerText = app.querySelector('#footerTxt');
      if (footerText) {
        this.renderer.setProperty(footerText, 'innerText', marca);
      }
    }


  }

  private DesabilitaVwProtege(): void{
    const sidebar = document.querySelector('app-sidebar');
    if (sidebar) {
      const element = sidebar.querySelector('#vwProtege');

      if (element) {
        console.log(element)
        this.renderer.setStyle(element, 'display', 'none');
      }
    }
  }

}
