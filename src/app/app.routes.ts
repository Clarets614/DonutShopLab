import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';

export const routes: Routes = [
//home page
{path:"", component: DonutsComponent},

//cart
{path:"Cart", component:CartComponent},

//details
{path:":id", component:DonutDetailsComponent},

//not found page
{path:"**", component: NotFoundComponent}

];
