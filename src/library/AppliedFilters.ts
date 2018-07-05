import {ActivatedRoute} from '@angular/router';
import {SmartTableComponent} from 'bng-angular-base/components/smart-table/smart-table.component';
import 'nglinq/linq';

export class AppliedFilters {
    public static set(route: ActivatedRoute, smart_table: SmartTableComponent) {
        const url_params = route.snapshot.queryParams;
        const key_value_list = [];
        for (let key in url_params) {
            if (!smart_table.query_parameters.has(key)) {
                smart_table.query_parameters.set(key, url_params[key]);
            }
        }
        smart_table.query_parameters.forEach((value, key) => {
            if (Object.keys(url_params).contains(key)) {
                key_value_list.push({key: key, value: value});
            }
        });
        return key_value_list;
    }
}