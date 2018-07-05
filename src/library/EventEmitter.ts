export type Listener<K> = (message: K) => void;

export class EventEmitter<T, K> {

    private emitted_events: Map<T, K> = new Map<T, K>();
    private once_event_list: Map<T, Listener<K>[]> = new Map<T, Listener<K>[]>();
    private on_event_list: Map<T, Listener<K>[]> = new Map<T, Listener<K>[]>();


    public on(event: T, listener: Listener<K>): this {
        if (!this.on_event_list.has(event)) {
            this.on_event_list.set(event, []);
        }

        this.on_event_list.get(event).push(listener);
        return this;
    }

    public once(event: T, listener: Listener<K>): this {

        if (this.emitted_events.has(event)) {
            const message: K = this.emitted_events.get(event);
            listener(message);
            return this;
        }

        if (!this.once_event_list.has(event)) {
            this.once_event_list.set(event, []);
        }

        this.once_event_list.get(event).push(listener);
        return this;
    }

    public emit(event: T, message: K = null): boolean {
        if (this.on_event_list.has(event)) {
            for (const listener of this.on_event_list.get(event)) {
                listener(message);
            }
            return true;
        }
        return false;
    }

    public emitOnce(event: T, message: K = null): boolean {

        if (this.emitted_events.has(event)) {
            return false;
        }

        this.emitted_events.set(event, message);

        if (this.once_event_list.has(event)) {
            for (const listener of this.once_event_list.get(event)) {
                listener(message);
            }
            this.once_event_list.delete(event);

            return true;
        }

        return false;
    }
}