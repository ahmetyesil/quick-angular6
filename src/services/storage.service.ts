import {Injectable} from '@angular/core';

import {StorageServiceBase} from 'bng-angular-base/services/storage.service';
import {Session} from '../models/session/session';

@Injectable({
    providedIn: 'root',
})
export class StorageService extends StorageServiceBase {

    protected getLocalStoragePrefix(): string {
        return 'storage_';
    }

    public setUserModel(user: Session) {
        this.set('user_model', user);
    }

    public getUserModel(): Session {
        return this.get<Session>('user_model');
    }
    public getCurrentTenant(): string {
        return this.get<string>('current_tenant', true);
    }
    public getSessionID(): string {
        return this.get<string>('session_id', true);
    }
    public removeSessionID() {
        this.remove('session_id', true);
    }
}
