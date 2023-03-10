"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _typeormSeeding = require("typeorm-seeding");
const _role = require("../../entities/Role");
const _userRole = require("../../enum/UserRole");
(0, _typeormSeeding.define)(_role.Role, (faker)=>{
    const role = new _role.Role();
    role.name = faker.random.arrayElement([
        _userRole.USER_ROLE.ADMIN,
        _userRole.USER_ROLE.MEMBER
    ]);
    return role;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9maXh0dXJlcy9mYWN0b3JpZXMvUm9sZUZhY3RvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSAndHlwZW9ybS1zZWVkaW5nJztcbmltcG9ydCAqIGFzIEZha2VyIGZyb20gJ2Zha2VyJztcblxuaW1wb3J0IHsgUm9sZSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL1JvbGUnO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW51bS9Vc2VyUm9sZSc7XG5cbmRlZmluZShSb2xlLCAoZmFrZXI6IHR5cGVvZiBGYWtlcikgPT4ge1xuICBjb25zdCByb2xlID0gbmV3IFJvbGUoKTtcblxuICByb2xlLm5hbWUgPSBmYWtlci5yYW5kb20uYXJyYXlFbGVtZW50KFtVU0VSX1JPTEUuQURNSU4sIFVTRVJfUk9MRS5NRU1CRVJdKTtcblxuICByZXR1cm4gcm9sZTtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJvbGUiLCJmYWtlciIsInJvbGUiLCJuYW1lIiwicmFuZG9tIiwiYXJyYXlFbGVtZW50IiwiVVNFUl9ST0xFIiwiQURNSU4iLCJNRU1CRVIiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBQXVCO3NCQUdGOzBCQUNLO0FBRTFCQSxJQUFBQSxzQkFBTSxFQUFDQyxVQUFJLEVBQUUsQ0FBQ0MsUUFBd0I7SUFDcEMsTUFBTUMsT0FBTyxJQUFJRixVQUFJO0lBRXJCRSxLQUFLQyxJQUFJLEdBQUdGLE1BQU1HLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1FBQUNDLG1CQUFTLENBQUNDLEtBQUs7UUFBRUQsbUJBQVMsQ0FBQ0UsTUFBTTtLQUFDO0lBRXpFLE9BQU9OO0FBQ1QifQ==