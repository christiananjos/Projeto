import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export default class AppComponent {
  constructor(private renderer: Renderer2) {}

  alterarEstiloETexto(componente: string): void {
    switch (componente) {
      case 'header':
        this.alterarHeader();
        break;
      case 'sidebar':
        this.alterarSidebar();
        break;
      case 'footer':
        this.alterarFooter();
        break;
      default:
        console.warn('Componente não reconhecido');
    }
  }

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
