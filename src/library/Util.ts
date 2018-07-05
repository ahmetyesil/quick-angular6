export class Util {
    public static clone(object: any) {
        const type = typeof object;
        if (type === 'object') {
            const cloned_object = {};
            for (const key in object) {
                cloned_object[key] = Util.clone(object[key]);
            }
            if (object.__proto__) {
                cloned_object['__proto__'] = object.__proto__;
            }
            return cloned_object;
        } else {
            return object;
        }
    }
}
