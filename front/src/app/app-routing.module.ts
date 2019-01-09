import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDesafioComponent } from './list-desafio/list-desafio.component';
import { ListIdeaComponent } from './list-idea/list-idea.component';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import { AddDesafioComponent } from './add-desafio/add-desafio.component';

const routes: Routes = [
	{
    path: 'ideas',
    component: ListIdeaComponent,
    data: { title: 'Lista ideas' }
 	},
 	{
    path: 'desafios',
    component: ListDesafioComponent,
    data: { title: 'Lista desafios' }
 	},
 	/*{
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  	},*/
  	{
    path: 'add-idea',
    component: AddIdeaComponent,
    data: { title: 'Agregar idea' }
 	},
  	{
    path: 'add-desafio',
    component: AddDesafioComponent,
    data: { title: 'Agregar desafio' }
 	},
  	/*{
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Edit Product' }
  	},*/
  	{ 
  	path: '',
    redirectTo: '/ideas',
    pathMatch: 'full'
  	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
