import { Routes } from '@angular/router';
import { AdminGuard } from './adminGuard';

export const routes: Routes = [
    {
          path: 'rakhi',
    loadComponent: () =>
      import('./modules/rakhi/rakhi')
        .then(m => m.Rakhi)
    },
     {
    path: 'return-gifts',
    loadComponent: () =>
      import('./modules/return-gifts/return-gifts')
        .then(m => m.ReturnGifts)
  },
  {
    path: 'decoration',
    loadComponent: () =>
      import('./modules/decoration/decoration')
        .then(m => m.Decoration)
  },
  {
  path: 'festive-collection',
  loadComponent: () =>
    import('./modules/festive-collection/festive-collection')
      .then(m => m.FestiveCollection)
},
  {
  path: 'admin/login',
  loadComponent: () =>
    import('./modules/admin/login/login')
      .then(m => m.Login)
  },
{
  path: 'admin',
  canActivate: [AdminGuard],
  loadComponent: () =>
    import('./modules/admin/dashboard/dashboard')
      .then(m => m.Dashboard)
},
{
  path: 'admin/add-rakhi',
  loadComponent: () =>
    import('./modules/admin/add-rakhi/add-rakhi')
      .then(m => m.AddRakhi)
},
{
  path: 'admin/add-product',
  loadComponent: () =>
    import('./modules/admin/add-product/add-product')
      .then(m => m.AddProduct)
},
  {
    path: '',
    redirectTo: 'rakhi',
    pathMatch: 'full'
  }
];
