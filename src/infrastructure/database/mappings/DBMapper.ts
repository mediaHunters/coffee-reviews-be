import { Mapper } from '@wufe/mapper';
import { IMapperConfiguration } from '@wufe/mapper/types/conf/mapper.configuration';

import { injectable } from 'inversify';

import { RoleEntityToRoleDomain } from 'infrastructure/database/mappings/Role/RoleEntityToRoleDomain';
import { UserEntityToUserDomain } from 'infrastructure/database/mappings/User/UserEntityToUserDomain';
import { CoffeeEntityToCoffeeDomain } from 'infrastructure/database/mappings/Coffee/CoffeEntityToCoffeeDomain';
import { ReviewEntityToReviewDomain } from 'infrastructure/database/mappings/Review/ReviewEntityToReviewDomain';

@injectable()
export class DBMapper {
  public readonly mapper: Mapper;

  constructor() {
    this.mapper = new Mapper().withConfiguration(
      (configuration: IMapperConfiguration) =>
        configuration
          .shouldIgnoreSourcePropertiesIfNotInDestination(true)
          .shouldAutomaticallyMapArrays(true)
    );

    this.initialize();
  }

  private initialize(): void {
    UserEntityToUserDomain().configureMapping(this.mapper);
    RoleEntityToRoleDomain().configureMapping(this.mapper);
    CoffeeEntityToCoffeeDomain().configureMapping(this.mapper);
    ReviewEntityToReviewDomain().configureMapping(this.mapper);
  }
}
