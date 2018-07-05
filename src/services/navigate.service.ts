import {Injectable} from '@angular/core';
import {Route, Router} from '@angular/router';
import {StorageService} from './storage.service';
import {SocketIO} from './socket/socket-io/socket-io';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private storage_service: StorageService, private router: Router, private socket_io: SocketIO) {
  }

  public onSessionFailed() {
    this.storage_service.removeSessionID();
    this.return_url = location.pathname;
    this.router.navigate(['login']);
    this.socket_io.disconnect();
  }
}
