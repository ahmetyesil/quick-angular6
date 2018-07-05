import {ApiService} from './api.service';
import {APIURLs} from '../../constants/api-urls.constant';
import {Injectable} from '@angular/core';
import {ResponseModel} from 'bng-angular-base/models/response.model';
import {LoginModel} from '../../models/login';
import {StorageService} from './storage.service';
import {Session} from '../../models/session/session';

@Injectable({
    providedIn: 'root',
})
export class SessionApiService {

    constructor(private api_service: ApiService,
                private storage_service: StorageService) {
    }

    public createSession(email: string, password: string): Promise<boolean> {
        const login_model = new LoginModel();
        login_model.email = email;
        login_model.password = password;

        return this.api_service.httpPost<Session>(APIURLs.SESSION, login_model)
            .then(response_model => {
                this.setSession(response_model);
                return true;
            })
            .catch(error => {
                return false;
            });
    }

    public getSession(session_id: string): Promise<boolean> {
        return this.api_service
            .httpGet<Session>(APIURLs.SESSION + '/' + session_id)
            .then(response_model => {
                this.setSession(response_model);
                return true;
            })
            .catch(error => {
                return false;
            });
    }

    private setSession(response_model: ResponseModel<Session>) {
        const user = response_model.getBody();
        this.storage_service.setUserModel(user);
        this.storage_service.setSessionID(user.session_id);
    }
}
