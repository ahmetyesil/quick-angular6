import {Router} from '@angular/router';
import {APIServiceBase} from 'bng-angular-base/services/api.service';
import {Injectable} from '@angular/core';
import {ResponseModel} from 'bng-angular-base/models/response.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {StorageService} from './storage.service';
import {HTTPHeaders} from '../../constants/http-headers.constant';
import {HttpStatusService} from '../http-status.service';
import {NavigateService} from '../navigate.service';

@Injectable({providedIn: 'root'})
export class ApiService extends APIServiceBase {

    private header: HttpHeaders;

    constructor(protected http: HttpClient,
                protected router: Router,
                protected http_status_service: HttpStatusService,
                private storage_service: StorageService,
                private navigate_service: NavigateService) {
        super(http);
    }

    protected getBaseUri(): string {
        return environment.base_uri;
    }

    public getPanelUri(): string {
        return environment.panel_uri;
    }

    protected getHeaders(): HttpHeaders {
        let headers = super.getHeaders();
        if (this.storage_service.getSessionID() !== null) {
            headers = headers.append(HTTPHeaders.SESSION_ID, this.storage_service.getSessionID());
        }
        return headers;
    }

    protected doApiCall<T>(method: string,
                           uri: string,
                           query_parameters?: Map<string, string>,
                           body?: any): Promise<ResponseModel<T>> {
        return super.doApiCall(method, uri, query_parameters, body)
            .then(response => {
                this.header = response.getHeaders();
                return response;
            })
            .catch(error => {
                switch (error.status) {
                    case 0:
                        if (error.url.includes('session')) {
                            this.navigate_service.onSessionFailed();
                        }
                        break;
                    case 401:
                        this.navigate_service.onSessionFailed();
                        this.http_status_service.showHttpStatusMessage(error);
                        break;
                    case 404:
                        if (error.url.includes('session')) {
                            this.navigate_service.onSessionFailed();
                        } else {
                            this.http_status_service.showHttpStatusMessage(error);
                        }
                        break;
                    default:
                        this.http_status_service.showHttpStatusMessage(error);
                }
                return null;
            });
    }
}
