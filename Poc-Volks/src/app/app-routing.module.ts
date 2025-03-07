import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VwProtegeComponent } from './vw-protege/vw-protege.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'app-vw-protege', component: VwProtegeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
