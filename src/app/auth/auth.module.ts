import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        SplashScreenComponent,
        RecoveryPasswordComponent,
        AuthComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule.forRoot(),
        AuthRoutingModule,
    ],
    exports: [],
    providers: [],
})
export class AuthModule { }