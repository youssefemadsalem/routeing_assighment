import { Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import path from 'path';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProtofiloComponent } from '../protofilo/protofilo.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'protofilo',component:ProtofiloComponent},
    {path:'contact',component:ContactComponent},
    {path:'**' , component:NotfoundComponent}
];
