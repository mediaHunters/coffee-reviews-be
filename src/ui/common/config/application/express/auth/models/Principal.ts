import { interfaces } from 'inversify-express-utils';

import { User } from 'ui/common/models/User';

export class Principal implements interfaces.Principal {
  public details: User | undefined;

  public constructor(details: User | undefined) {
    this.details = details;
  }

  public isAuthenticated(): Promise<boolean> {
    return Promise.resolve(!!this.details);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public isResourceOwner(resourceId: any): Promise<boolean> {
    return Promise.resolve(resourceId === true);
  }

  public isInRole(role: string): Promise<boolean> {
    console.log("prinsipal mistake",role)
    return Promise.resolve(role === this.details?.role);
  }
}
