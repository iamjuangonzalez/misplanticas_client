import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    constructor() { }

    public getError(err: any) {
        const errorReturned = {
            status: 400,
            name: 'Unknown error',
            message: 'Unknown error'
        }
        if (err.response?.data?.message) {
            errorReturned.message = err.response.data.message
            errorReturned.status = err.response.data.status
            errorReturned.name = err.response.data.name
        }
        // console.log(errorReturned)
        return errorReturned
    }
}