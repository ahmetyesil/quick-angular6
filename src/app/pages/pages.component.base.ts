import {QueryParameterKeys} from '../../constants/query-parameter-keys';
import {RoleParameterKeys} from '../../constants/role-parameter-keys';


export abstract class PageComponentBase {
    protected QueryParameterKeys: QueryParameterKeys = new QueryParameterKeys();
    public RoleParameterKeys: RoleParameterKeys = new RoleParameterKeys();
}
