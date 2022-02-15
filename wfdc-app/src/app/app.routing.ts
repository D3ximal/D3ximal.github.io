import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { ReizenComponent } from './reizen';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'reizen', component: ReizenComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);