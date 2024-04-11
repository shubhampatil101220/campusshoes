import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
 
  {path:'', redirectTo:'Home', pathMatch:'full'},
  // {path:'**',redirectTo:'Home',pathMatch:'full'},
  { path: 'Home', component: HomeComponent },
  {path: 'product-detail/:id', component :ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
