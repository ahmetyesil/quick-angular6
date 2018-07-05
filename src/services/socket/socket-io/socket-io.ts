import {EventEmitter, Listener} from '../../../library/EventEmitter';
import {Injectable} from '@angular/core';
import Socket = SocketIOClient.Socket;
import * as io from 'socket.io-client';
import 'nglinq/linq';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class SocketIO extends EventEmitter<string, any> {
    private socket: Socket = null;
    private listening_event_list: string[] = [];

    private ensureSocketEventListening(event: string) {
        if (!this.listening_event_list.contains(event)) {
            this.listening_event_list.push(event);
            this.getSocket().on(event, (response) => {
                this.emit(event, response);
            });
        }
    }

    public on<T>(event: string, listener: Listener<T>): this {
        super.on(event, listener);
        this.ensureSocketEventListening(event);
        return this;
    }

    public send(event: string, content: any) {
        this.getSocket().emit(event, content);
    }

    private getSocket(): Socket {
        if (this.socket === null) {
            this.socket = io(environment.socket_uri);
        }
        return this.socket;
    }

    public disconnect() {
        if (this.socket) {
            this.socket.close();
        }
        this.socket = null;
        this.listening_event_list = [];
    }
}
