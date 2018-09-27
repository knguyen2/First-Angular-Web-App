import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { ItemdetailComponent } from '../itemdetail/itemdetail.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { HomeComponent } from '../home/home.component';
import { DealsComponent } from '../deals/deals.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'itemdetail/:id', component: ItemdetailComponent }, 
  { path: 'deals', component: DealsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
