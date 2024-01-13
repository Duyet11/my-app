import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component'; 
import { EditComponent } from './pages/admin/edit/edit.component';
import { CreateComponent } from './pages/admin/create/create.component';
export const routes: Routes = [
  // route '/' = page Home
  // path, component
  { path: '', component: HomeComponent },
  // { path: 'admin', component: ProductsComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/edit', component: EditComponent },
      { path: 'products/create', component: CreateComponent },
    ],
  },
];