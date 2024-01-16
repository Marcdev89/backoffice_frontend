import { Routes } from '@angular/router';
import { LicencesListComponent } from './components/licences-list/licences-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { homeGuard } from './guards/home.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
 
    {
        path:'licences', component: LicencesListComponent, canActivate: [loginGuard] 
    },
    {
        path:'', redirectTo:'licences', pathMatch:'full'
    },
    {
        path:'login', component: LoginComponent, canActivate: [homeGuard]
    },
    {
        path:'**', component: PageNotFoundComponent
    }
];
