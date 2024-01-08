import { Routes } from '@angular/router';
import { LicencesListComponent } from './components/licences-list/licences-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
 
    {
        path:'', component: LicencesListComponent
    },
    {
        path:'**', component: PageNotFoundComponent
    }
];
