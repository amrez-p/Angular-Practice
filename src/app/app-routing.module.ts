import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsComponent } from './forms/forms.component';
//Page Routing//
const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormsComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

//Page Routing//

//Browser Router === NgModule//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
//Browser Router === NgModule//
export class AppRoutingModule {}
