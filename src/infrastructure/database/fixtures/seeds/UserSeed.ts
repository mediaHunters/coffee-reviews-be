import { Factory, Seeder } from 'typeorm-seeding';

import { User } from 'infrastructure/database/entities/User';
import { Role } from 'infrastructure/database/entities/Role';

import { USER_ROLE } from 'infrastructure/database/enum/UserRole';

export class UserSeed implements Seeder {
  async run(factory: Factory): Promise<void> {
    await this.prepareAdminUserSeeds(factory);
    await this.prepareMemberUserSeeds(factory);
  }

  private async prepareAdminUserSeeds(factory: Factory): Promise<void> {
    const adminRole = await factory(Role)().create({
      name: USER_ROLE.ADMIN,
    });

    await factory(User)().create({
      email: 'admin@example.com',
      role: adminRole,
      nickname: 'nick admin',
    });
  }

  private async prepareMemberUserSeeds(factory: Factory): Promise<void> {
    const memberRole = await factory(Role)().create({
      name: USER_ROLE.MEMBER,
    });

    await factory(User)().create({
      email: 'user@example.com',
      role: memberRole,
      nickname: 'sample_nick',
    });
  }
}
