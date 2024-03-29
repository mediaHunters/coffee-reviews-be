import { OK } from 'http-status-codes';

import { inject } from 'inversify';

import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  requestBody,
} from 'inversify-express-utils';

import { Request } from 'express';

import { IUserService } from 'core/applicationServices/User/IUserService';
import { RemoveUserCommand } from 'core/applicationServices/User/requests/command/RemoveUserCommand';
import { DOMAIN_APPLICATION_SERVICE_IDENTIFIERS } from 'core/CoreModuleSymbols';

import { RemoveUserCommandBody } from 'ui/portal/User/rest/v1/requests/command/RemoveUserCommandBody';
import { isAuthenticated } from 'ui/common/config/application/express/auth/middlewares/isAuthenticated';
import { USER_ROLE } from 'core/domain/User/UserRole';
import { getCurrentUser } from 'ui/common/config/application/express/auth/utils/getHttpContext';

@controller('/v1/user')
export class UserController extends BaseHttpController {
  constructor(
    @inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE)
    private readonly UserService: IUserService
  ) {
    super();
  }

  @httpGet('/')
  public async get() {
    return this.json(OK);
  }

  @httpGet('/currentUser')
  public async getCurrentUser(req: Request) {
    const user = getCurrentUser(req);

    return this.json(user);
  }

  @httpPost('/removeUser', isAuthenticated({ role: USER_ROLE.ADMIN }))
  public async Remove(@requestBody() { id }: RemoveUserCommandBody) {
    return this.UserService.removeUser(new RemoveUserCommand(id));
  }
}
