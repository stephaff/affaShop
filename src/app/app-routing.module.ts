import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { JeweleryComponent } from './components/jewelery/jewelery.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'products/electronics', component: ElectronicsComponent },
  { path: 'products/jewelery', component: JeweleryComponent },
  { path: "products/men's clothing", component: MenComponent },
  { path: "products/women's clothing", component: WomenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
