"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserSeed", {
    enumerable: true,
    get: ()=>UserSeed
});
const _user = require("../../entities/User");
const _role = require("../../entities/Role");
const _userRole = require("../../enum/UserRole");
class UserSeed {
    async run(factory) {
        await this.prepareAdminUserSeeds(factory);
        await this.prepareMemberUserSeeds(factory);
    }
    async prepareAdminUserSeeds(factory) {
        const adminRole = await factory(_role.Role)().create({
            name: _userRole.USER_ROLE.ADMIN
        });
        await factory(_user.User)().create({
            email: 'admin@example.com',
            role: adminRole,
            nickname: 'nick admin'
        });
    }
    async prepareMemberUserSeeds(factory) {
        const memberRole = await factory(_role.Role)().create({
            name: _userRole.USER_ROLE.MEMBER
        });
        await factory(_user.User)().create({
            email: 'user@example.com',
            role: memberRole,
            nickname: 'sample_nick'
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9maXh0dXJlcy9zZWVkcy9Vc2VyU2VlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWN0b3J5LCBTZWVkZXIgfSBmcm9tICd0eXBlb3JtLXNlZWRpbmcnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW50aXRpZXMvUm9sZSc7XG5cbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudW0vVXNlclJvbGUnO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlZWQgaW1wbGVtZW50cyBTZWVkZXIge1xuICBhc3luYyBydW4oZmFjdG9yeTogRmFjdG9yeSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMucHJlcGFyZUFkbWluVXNlclNlZWRzKGZhY3RvcnkpO1xuICAgIGF3YWl0IHRoaXMucHJlcGFyZU1lbWJlclVzZXJTZWVkcyhmYWN0b3J5KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHJlcGFyZUFkbWluVXNlclNlZWRzKGZhY3Rvcnk6IEZhY3RvcnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhZG1pblJvbGUgPSBhd2FpdCBmYWN0b3J5KFJvbGUpKCkuY3JlYXRlKHtcbiAgICAgIG5hbWU6IFVTRVJfUk9MRS5BRE1JTixcbiAgICB9KTtcblxuICAgIGF3YWl0IGZhY3RvcnkoVXNlcikoKS5jcmVhdGUoe1xuICAgICAgZW1haWw6ICdhZG1pbkBleGFtcGxlLmNvbScsXG4gICAgICByb2xlOiBhZG1pblJvbGUsXG4gICAgICBuaWNrbmFtZTogJ25pY2sgYWRtaW4nLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwcmVwYXJlTWVtYmVyVXNlclNlZWRzKGZhY3Rvcnk6IEZhY3RvcnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtZW1iZXJSb2xlID0gYXdhaXQgZmFjdG9yeShSb2xlKSgpLmNyZWF0ZSh7XG4gICAgICBuYW1lOiBVU0VSX1JPTEUuTUVNQkVSLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgZmFjdG9yeShVc2VyKSgpLmNyZWF0ZSh7XG4gICAgICBlbWFpbDogJ3VzZXJAZXhhbXBsZS5jb20nLFxuICAgICAgcm9sZTogbWVtYmVyUm9sZSxcbiAgICAgIG5pY2tuYW1lOiAnc2FtcGxlX25pY2snLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVXNlclNlZWQiLCJydW4iLCJmYWN0b3J5IiwicHJlcGFyZUFkbWluVXNlclNlZWRzIiwicHJlcGFyZU1lbWJlclVzZXJTZWVkcyIsImFkbWluUm9sZSIsIlJvbGUiLCJjcmVhdGUiLCJuYW1lIiwiVVNFUl9ST0xFIiwiQURNSU4iLCJVc2VyIiwiZW1haWwiLCJyb2xlIiwibmlja25hbWUiLCJtZW1iZXJSb2xlIiwiTUVNQkVSIl0sIm1hcHBpbmdzIjoiOzs7OytCQU9hQTs7YUFBQUE7O3NCQUxRO3NCQUNBOzBCQUVLO0FBRW5CLE1BQU1BO0lBQ1gsTUFBTUMsSUFBSUMsT0FBZ0IsRUFBaUI7UUFDekMsTUFBTSxJQUFJLENBQUNDLHFCQUFxQixDQUFDRDtRQUNqQyxNQUFNLElBQUksQ0FBQ0Usc0JBQXNCLENBQUNGO0lBQ3BDO0lBRUEsTUFBY0Msc0JBQXNCRCxPQUFnQixFQUFpQjtRQUNuRSxNQUFNRyxZQUFZLE1BQU1ILFFBQVFJLFVBQUksSUFBSUMsTUFBTSxDQUFDO1lBQzdDQyxNQUFNQyxtQkFBUyxDQUFDQyxLQUFLO1FBQ3ZCO1FBRUEsTUFBTVIsUUFBUVMsVUFBSSxJQUFJSixNQUFNLENBQUM7WUFDM0JLLE9BQU87WUFDUEMsTUFBTVI7WUFDTlMsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxNQUFjVix1QkFBdUJGLE9BQWdCLEVBQWlCO1FBQ3BFLE1BQU1hLGFBQWEsTUFBTWIsUUFBUUksVUFBSSxJQUFJQyxNQUFNLENBQUM7WUFDOUNDLE1BQU1DLG1CQUFTLENBQUNPLE1BQU07UUFDeEI7UUFFQSxNQUFNZCxRQUFRUyxVQUFJLElBQUlKLE1BQU0sQ0FBQztZQUMzQkssT0FBTztZQUNQQyxNQUFNRTtZQUNORCxVQUFVO1FBQ1o7SUFDRjtBQUNGIn0=