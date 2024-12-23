import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  { 
    path: 'customer', 
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
