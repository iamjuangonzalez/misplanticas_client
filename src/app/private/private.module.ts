import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { privateRoutingModule } from './private-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
    declarations: [
        LayoutComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        privateRoutingModule,
    ],
    exports: [],
    providers: [],
})
export class PrivateModule { }