import {QuickSelectItemDirective} from 'bng-angular-base/components/quick-select/quick-select-item.directive';

export class Filter {
    public static applyFilter(query_key: string, selected_item: QuickSelectItemDirective, query_parameters: Map<string, string>) {
        const query_value = selected_item.value;
        if (query_value === null || query_value === undefined || query_value === '') {
            query_parameters.delete(query_key);
        } else {
            query_parameters.set(query_key, query_value);
        }
    }
    public static applySourceFilter(query_key: string, selected_item: QuickSelectItemDirective, query_parameters: Map<string, string>) {
        const query_value = selected_item['id'];
        if (query_value === null || query_value === undefined || query_value === '') {
            query_parameters.delete(query_key);
        } else {
            query_parameters.set(query_key, query_value);
        }
    }
}
