import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'

import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'
import { ErrorHandlerService } from './../services/error-handler.service'
@NgModule({
    imports: [CommonModule],
    providers: [
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
    ]
    // exports: [NgxPermissionsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [JwtModule, ErrorHandlerService]
        }
    }


}
