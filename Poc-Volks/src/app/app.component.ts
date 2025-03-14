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
  //porsche
  //carbank

  ngOnInit() {
    this.marcas(this.flagEmpresa);
    this.listarComponentes();
    this.alteraCssMainContent();
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
    this.alteraCorFonteSidebar('#095b73');
    // this.alteraButtonMainContent('#095b73');
    this.alteraBackgroundColorFooter('#095b73');


  }
  private porsche(): void {
    this.alteraCorFonte('#000000');
    this.alteraLogoHeader('https://logodownload.org/wp-content/uploads/2021/02/porsche-logo-0.png');
    this.alteraCorFonteSidebar('#000000');
    // this.alteraButtonMainContent('#000000');
    this.alteraBackgroundColorFooter('#403F44');

  }

  private carbank(): void {
    this.alteraCorFonte('#00984A');
    this.alteraLogoHeader('https://cdn.bancovw.com.br/cdn/whitelabel/whl6100000/logoCarBankTransp.png');
    this.alteraCorFonteSidebar('#00984A');
    // this.alteraButtonMainContent('#00984A');
    this.alteraBackgroundColorFooter('#00984A');
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

  private listarComponentes(): void {
    const componentes = [
      'app-header',
      'app-footer-base',
      'app-root',
      'app-sidebar',
      'app-main-content'
    ];

    componentes.forEach(componente => {
      const element = document.querySelector(componente);
      if (element) {
        console.log(`Componente encontrado: ${componente}`);
      } else {
        console.log(`Componente não encontrado: ${componente}`);
      }
    });
  }

  private alteraCssMainContent(): void {
    const selector = document.querySelector('app-root app-main-content');
    console.log(selector)
    
    
    
  }
}
