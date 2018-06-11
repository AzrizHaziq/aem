import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AuthenticateGuard } from './guard/authenticate-guard';
import { NotAuthenticateGuard } from './guard/not-authenticate.guard';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-up',
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        canActivate: [ NotAuthenticateGuard ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ AuthenticateGuard ]
    }
];
