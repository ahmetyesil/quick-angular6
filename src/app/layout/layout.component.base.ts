import {RoleParameterKeys} from '../../constants/role-parameter-keys';
import {QueryParameterKeys} from '../../constants/query-parameter-keys';

export abstract class LayoutComponentBase {
  protected QueryParameterKeys: QueryParameterKeys = new QueryParameterKeys();
  public RoleParameterKeys: RoleParameterKeys = new RoleParameterKeys();
}
