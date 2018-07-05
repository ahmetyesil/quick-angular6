import {Injectable} from '@angular/core';
import {StorageServiceBase} from 'bng-angular-base/services/storage.service';
import {Session} from '../../models/session/session';

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

  public setSessionID(session_id: string) {
    this.set('session_id', session_id, true);
  }

  public getSessionID(): string {
    return this.get<string>('session_id', true);
  }
}
