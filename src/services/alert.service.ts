import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class AlertService {

    constructor(private toastr: ToastrService) {
    }

    public getSuccessToastr(message) {
        this.toastr.success(message, '', {
            closeButton: true
        });
    }

    public getErrorToastr(message) {
        this.toastr.error(message, 'Hata', {
            timeOut: 7000,
            closeButton: true
        });
    }

    public getStaticErrorToastr(code, message) {
        this.toastr.warning(message, code, {
            timeOut: 7000,
            closeButton: true
        });
    }

    public getInfoToastr(message, title?) {
        this.toastr.info(message, title || '', {
            timeOut: 7000,
            closeButton: true
        });
    }
}
