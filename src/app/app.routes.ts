import { Routes } from '@angular/router';

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
    path: '',
    redirectTo: 'rakhi',
    pathMatch: 'full'
  }
];
