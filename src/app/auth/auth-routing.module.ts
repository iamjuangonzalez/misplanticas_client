import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'splash-creen',
                pathMatch: 'full',
            },
            {
                path: 'splash-creen',
                component: SplashScreenComponent
            },
            {
                path: 'login',
                component: SignInComponent,
            },
            {
                path: 'register',
                component: SignUpComponent,
            },
            {
                path: 'recovery',
                component: RecoveryPasswordComponent,
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'splash-creen',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }