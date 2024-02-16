import { Routes } from '@angular/router';
import { EstoqueCamisasComponent } from './estoque-camisas/estoque-camisas.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'estoque-camisas'
  },
  {
    path: 'estoque-camisas',
    component: EstoqueCamisasComponent
  }
];
