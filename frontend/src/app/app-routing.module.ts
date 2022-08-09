import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { PrijavaComponent } from './prijava/prijava.component';

const routes: Routes = [
  {path:'', component:PrijavaComponent},
  {path:'admin', component:AdminComponent},
  {path:'korisnik', component:KorisnikComponent},
  {path:'**', component:PrijavaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
