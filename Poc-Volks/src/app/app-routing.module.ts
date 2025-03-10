import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VwProtegeComponent } from './vw-protege/vw-protege.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ValidadorBoletosComponent } from './validador-boletos/validador-boletos.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'app-vw-protege', component: VwProtegeComponent },
  { path: 'app-validador-boletos', component: ValidadorBoletosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
