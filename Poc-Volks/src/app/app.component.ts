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


  private alterarParaVolks(): void {

    // this.alteraCorFonte();
    this.alterarFooter('#095b73');
    // this.alteraImagensCarousel();
    // this.alteraTextoSubmenuProtege();
    // this.alteraTextoBeneficiarioValidorBoletos();

  }
  private alterarParaPorsche(): void {

    this.alterarHeader('https://logodownload.org/wp-content/uploads/2021/02/porsche-logo-0.png');
    this.alterarFooter('#403F44');
    // this.alteraImagensCarousel();
    // this.alteraTextoSubmenuProtege();
    // this.alteraTextoBeneficiarioValidorBoletos();
  }

  private alterarParaCarbank(): void {
    this.alterarHeader('https://cdn.bancovw.com.br/cdn/whitelabel/whl6100000/logoCarBankTransp.png');
    this.alterarFooter('#00984A');
    this.alteraCorFonte();

    this.alteraImagensCarousel();
    this.alteraTextoSubmenuProtege();
    this.alteraTextoBeneficiarioValidorBoletos();
  }

  private alterarHeader(imgSource: string): void {
    const header = document.querySelector('app-header');
    if (header) {
      const imgLogo = header.querySelector('#imgLogo');
      if (imgLogo) {
        console.log(imgLogo);
        console.log(imgSource);
        this.renderer.setAttribute(imgLogo, 'src', imgSource);
      }
      // this.renderer.setStyle(header, 'background-color', 'blue');
      // this.renderer.setProperty(header, 'innerText', 'Novo Texto do Header');
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
