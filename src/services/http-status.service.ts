import {Injectable} from '@angular/core';
import {AlertService} from './alert.service';
import {Router} from '@angular/router';
import {StorageService} from './storage.service';
import {TurkishStringsConstant} from '../constants/turkish-strings.constant';

@Injectable({
    providedIn: 'root',
})
export class HttpStatusService {

    private StringsErrors = TurkishStringsConstant.TurkishStrings.ERRORS;

    constructor(private alert_service: AlertService, private router: Router, private storage_service: StorageService) {
    }

    public showHttpStatusMessage(error: any) {
        if (error.error_list && (this.StringsErrors[error.error_list.error])) {
            error.error_list.value ?
                this.alert_service.getErrorToastr(this.StringsErrors[error.error_list.error] + error.error_list.value) :
                this.alert_service.getErrorToastr(this.StringsErrors[error.error_list.error]);
        } else if (error.error_details && error.error_details.reason) {
            this.alert_service.getStaticErrorToastr('Hata: ' + error.error_details.code, error.error_details.reason);
        } else {
            switch (error.status) {
                case 0:
                    this.alert_service.getErrorToastr('Lütfen internet bağlantınızı kontrol ediniz.');
                    break;
                case 200:
                    this.alert_service.getSuccessToastr('Başarılı.');
                    break;
                case 401:
                    this.alert_service.getErrorToastr('Yanlış e-mail ya da parola.');
                    break;
                case 403:
                    this.router.navigate(['login']);
                    this.alert_service.getErrorToastr('Bu sayfa/işlem için yetkiniz bulunmamaktadır.');
                    break;
                case 404:
                    if (this.storage_service.getCurrentTenant() === 'irobot') {
                        this.router.navigate(['irobot/home']);
                    } else if (this.storage_service.getCurrentTenant() === 'management') {
                        this.router.navigate(['management/home']);
                    } else if (!this.storage_service.getCurrentTenant()) {
                        this.router.navigate(['common/home']);
                    }
                    this.alert_service.getErrorToastr('Sayfa bulunamadı.');
                    break;
                case 409:
                    this.alert_service.getErrorToastr('Girilen değer sistemde mevcut. Lütfen başka bir değer deneyiniz.');
                    break;
                case 422:
                    this.alert_service.getErrorToastr('İşlem yapılamadı, lütfen girdiğiniz verileri kontrol ediniz.');
                    break;
                case 429:
                    this.alert_service.getErrorToastr('Çok fazla istek gerçekleştirdiniz. Lütfen daha sonra tekrar deneyiniz.');
                    break;
                case 500:
                    this.alert_service.getErrorToastr('Bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz.');
                    break;
                default:
                    this.alert_service.getErrorToastr('Bu hata numarasını lütfen ilgili kişiye bildirin: ' + status);
            }
        }
    }
}
