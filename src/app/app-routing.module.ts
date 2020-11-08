import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  
  {  
    path: 'products',  
    component: ProductGetComponent  
  },
  {  
    path: 'product/create',  
    component: ProductAddComponent  
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
