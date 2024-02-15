import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{path:'',pathMatch:'full', redirectTo:'estoque-camisas'},
                                { path: 'estoque-camisas',
                                loadChildren: () => import('./estoque-camisas.component').then(m => m.EstoqueCamisasComponent)}

];

@NgModule({

imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
