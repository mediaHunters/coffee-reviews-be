"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserRepository", {
    enumerable: true,
    get: ()=>UserRepository
});
const _inversify = require("inversify");
const _bcrypt = require("bcrypt");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const _dbmapper = require("../../mappings/DBMapper");
const _user = require("../../entities/User");
const _repository = require("../common/Repository");
const _role = require("../../entities/Role");
const _infrastructureErrors = require("../../../common/errors/InfrastructureErrors");
const _baseError = require("../../../../core/common/errors/BaseError");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (void 0) && (void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
class UserRepository extends _repository.Repository {
    constructor(dbMapper){
        super(_user.User);
        this.dbMapper = dbMapper;
    }
    async addUser({ nickname , email , password , roleId  }) {
        const user = new _user.User();
        user.nickname = nickname;
        user.email = email;
        user.password = (0, _bcrypt.hashSync)(password, 10);
        const memberRole = new _role.Role();
        memberRole.id = roleId;
        user.role = memberRole;
        const savedUser = await this.save(user);
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
        }, savedUser);
    }
    async removeUser({ id  }) {
        const result = await this.custom().createQueryBuilder().leftJoinAndSelect('User.role', 'Role').where('User.id = :id ', {
            id
        }).getOne();
        if (!result) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.USER_NOT_FOUND]);
        }
        await this.remove(result);
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
        }, result);
    }
    async findUserByEmail({ email  }) {
        const result = await this.custom().createQueryBuilder().leftJoinAndSelect('User.role', 'role').where('User.email = :email', {
            email
        }).getMany();
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
        }, result[0]);
    }
    async getUser({ id  }) {
        const result = await this.custom().createQueryBuilder().leftJoinAndSelect('User.role', 'Role').where('User.id = :id ', {
            id
        }).getOne();
        if (!result) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.USER_NOT_FOUND]);
        }
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
        }, result);
    }
    async getUsers() {
        const users = await this.custom().createQueryBuilder().leftJoinAndSelect('User.role', 'role').getMany();
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
        }, users);
    }
    async checkIfUserAlreadyExists({ nickname , email  }) {
        const result = await this.custom().createQueryBuilder().leftJoinAndSelect('User.role', 'role').where('User.nickname = :nickname OR User.email = :email', {
            nickname,
            email
        }).getMany();
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
        }, result);
    }
}
UserRepository = __decorate([
    __param(0, (0, _inversify.inject)(_infrastructureModuleSymbols.INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _dbmapper.DBMapper === "undefined" ? Object : _dbmapper.DBMapper
    ])
], UserRepository);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L1VzZXIvVXNlclJlcG9zaXRvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgaGFzaFN5bmMgfSBmcm9tICdiY3J5cHQnO1xuXG5pbXBvcnQgeyBET01BSU5fTUFQUElOR19JREVOVElGSUVSUyB9IGZyb20gJ2NvcmUvQ29yZU1vZHVsZVN5bWJvbHMnO1xuaW1wb3J0IHsgSVVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL0lVc2VyUmVwb3NpdG9yeSc7XG5pbXBvcnQge1xuICBJTkZSQVNUUlVDVFVSRV9JREVOVElGSUVSUyxcbiAgREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUyxcbn0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvSW5mcmFzdHJ1Y3R1cmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IERCTWFwcGVyIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvbWFwcGluZ3MvREJNYXBwZXInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ2NvcmUvZG9tYWluL1VzZXIvVXNlcic7XG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJFbnRpdHkgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IEFkZFVzZXJSZXBvc2l0b3J5Q29tbWFuZCB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9yZXF1ZXN0L1JlcG9zaXRvcnkvY29tbWFuZC9BZGRVc2VyUmVwb3NpdG9yeUNvbW1hbmQnO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL3JlcG9zaXRvcnkvY29tbW9uL1JlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm9sZSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL1JvbGUnO1xuaW1wb3J0IHsgRmluZFVzZXJCeUVtYWlsUmVwb3NpdG9yeVF1ZXJ5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL3JlcXVlc3QvUmVwb3NpdG9yeS9xdWVyeS9GaW5kVXNlckJ5RW1haWxSZXBvc2l0b3J5UXVlcnknO1xuaW1wb3J0IHsgR2V0VXNlclJlcG9zaXRvcnlRdWVyeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9yZXF1ZXN0L1JlcG9zaXRvcnkvcXVlcnkvR2V0VXNlclJlcG9zaXRvcnlRdWVyeSc7XG5pbXBvcnQgeyBEZWxldGVVc2VyVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Vc2VyL3JlcXVlc3QvVW5pdE9mV29ya1JlcG9zaXRvcnkvY29tbWFuZC9EZWxldGVVc2VyVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kJztcbmltcG9ydCB7IEluZnJhc3RydWN0dXJlRXJyb3JzIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvY29tbW9uL2Vycm9ycy9JbmZyYXN0cnVjdHVyZUVycm9ycyc7XG5pbXBvcnQgeyBCYXNlRXJyb3IgfSBmcm9tICdjb3JlL2NvbW1vbi9lcnJvcnMvQmFzZUVycm9yJztcbmltcG9ydCB7IENoZWNrSWZVc2VyQWxyZWFkeUV4aXN0c1JlcG9zaXRvcnlRdWVyeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvVXNlci9yZXF1ZXN0L1JlcG9zaXRvcnkvcXVlcnkvQ2hlY2tJZlVzZXJBbHJlYWR5RXhpc3RzUmVwb3NpdG9yeVF1ZXJ5JztcblxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5XG4gIGV4dGVuZHMgUmVwb3NpdG9yeTxVc2VyRW50aXR5PlxuICBpbXBsZW1lbnRzIElVc2VyUmVwb3NpdG9yeVxue1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KElORlJBU1RSVUNUVVJFX0lERU5USUZJRVJTLkRCX01BUFBFUilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRiTWFwcGVyOiBEQk1hcHBlclxuICApIHtcbiAgICBzdXBlcihVc2VyRW50aXR5KTtcbiAgfVxuXG4gIGFzeW5jIGFkZFVzZXIoe1xuICAgIG5pY2tuYW1lLFxuICAgIGVtYWlsLFxuICAgIHBhc3N3b3JkLFxuICAgIHJvbGVJZCxcbiAgfTogQWRkVXNlclJlcG9zaXRvcnlDb21tYW5kKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyRW50aXR5KCk7XG5cbiAgICB1c2VyLm5pY2tuYW1lID0gbmlja25hbWU7XG4gICAgdXNlci5lbWFpbCA9IGVtYWlsO1xuICAgIHVzZXIucGFzc3dvcmQgPSBoYXNoU3luYyhwYXNzd29yZCwgMTApO1xuXG4gICAgY29uc3QgbWVtYmVyUm9sZSA9IG5ldyBSb2xlKCk7XG4gICAgbWVtYmVyUm9sZS5pZCA9IHJvbGVJZDtcbiAgICB1c2VyLnJvbGUgPSBtZW1iZXJSb2xlO1xuXG4gICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgdGhpcy5zYXZlKHVzZXIpO1xuXG4gICAgcmV0dXJuIHRoaXMuZGJNYXBwZXIubWFwcGVyLm1hcDxVc2VyRW50aXR5LCBVc2VyPihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLlVTRVJfRE9NQUlOLFxuICAgICAgICBzb3VyY2U6IERBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMuVVNFUl9FTlRJVFksXG4gICAgICB9LFxuICAgICAgc2F2ZWRVc2VyXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHJlbW92ZVVzZXIoe1xuICAgIGlkLFxuICB9OiBEZWxldGVVc2VyVW5pdE9mV29ya1JlcG9zaXRvcnlDb21tYW5kKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jdXN0b20oKVxuICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXG4gICAgICAubGVmdEpvaW5BbmRTZWxlY3QoJ1VzZXIucm9sZScsICdSb2xlJylcbiAgICAgIC53aGVyZSgnVXNlci5pZCA9IDppZCAnLCB7IGlkIH0pXG4gICAgICAuZ2V0T25lKCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFcnJvcihcbiAgICAgICAgSW5mcmFzdHJ1Y3R1cmVFcnJvcnNbSW5mcmFzdHJ1Y3R1cmVFcnJvcnMuVVNFUl9OT1RfRk9VTkRdXG4gICAgICApO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMucmVtb3ZlKHJlc3VsdCk7XG5cbiAgICByZXR1cm4gdGhpcy5kYk1hcHBlci5tYXBwZXIubWFwPFVzZXJFbnRpdHksIFVzZXI+KFxuICAgICAge1xuICAgICAgICBkZXN0aW5hdGlvbjogRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMuVVNFUl9ET01BSU4sXG4gICAgICAgIHNvdXJjZTogREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUy5VU0VSX0VOVElUWSxcbiAgICAgIH0sXG4gICAgICByZXN1bHRcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZmluZFVzZXJCeUVtYWlsKHtcbiAgICBlbWFpbCxcbiAgfTogRmluZFVzZXJCeUVtYWlsUmVwb3NpdG9yeVF1ZXJ5KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jdXN0b20oKVxuICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXG4gICAgICAubGVmdEpvaW5BbmRTZWxlY3QoJ1VzZXIucm9sZScsICdyb2xlJylcbiAgICAgIC53aGVyZSgnVXNlci5lbWFpbCA9IDplbWFpbCcsIHsgZW1haWwgfSlcbiAgICAgIC5nZXRNYW55KCk7XG5cbiAgICByZXR1cm4gdGhpcy5kYk1hcHBlci5tYXBwZXIubWFwPFVzZXJFbnRpdHksIFVzZXI+KFxuICAgICAge1xuICAgICAgICBkZXN0aW5hdGlvbjogRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMuVVNFUl9ET01BSU4sXG4gICAgICAgIHNvdXJjZTogREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUy5VU0VSX0VOVElUWSxcbiAgICAgIH0sXG4gICAgICByZXN1bHRbMF0hXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXIoeyBpZCB9OiBHZXRVc2VyUmVwb3NpdG9yeVF1ZXJ5KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jdXN0b20oKVxuICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXG4gICAgICAubGVmdEpvaW5BbmRTZWxlY3QoJ1VzZXIucm9sZScsICdSb2xlJylcbiAgICAgIC53aGVyZSgnVXNlci5pZCA9IDppZCAnLCB7IGlkIH0pXG4gICAgICAuZ2V0T25lKCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFcnJvcihcbiAgICAgICAgSW5mcmFzdHJ1Y3R1cmVFcnJvcnNbSW5mcmFzdHJ1Y3R1cmVFcnJvcnMuVVNFUl9OT1RfRk9VTkRdXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRiTWFwcGVyLm1hcHBlci5tYXA8VXNlckVudGl0eSwgVXNlcj4oXG4gICAgICB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5VU0VSX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLlVTRVJfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIHJlc3VsdFxuICAgICk7XG4gIH1cblxuICBhc3luYyBnZXRVc2VycygpOiBQcm9taXNlPFVzZXJbXT4ge1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5jdXN0b20oKVxuICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXG4gICAgICAubGVmdEpvaW5BbmRTZWxlY3QoJ1VzZXIucm9sZScsICdyb2xlJylcbiAgICAgIC5nZXRNYW55KCk7XG5cbiAgICByZXR1cm4gdGhpcy5kYk1hcHBlci5tYXBwZXIubWFwPFVzZXJFbnRpdHlbXSwgVXNlcltdPihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLlVTRVJfRE9NQUlOLFxuICAgICAgICBzb3VyY2U6IERBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMuVVNFUl9FTlRJVFksXG4gICAgICB9LFxuICAgICAgdXNlcnNcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgY2hlY2tJZlVzZXJBbHJlYWR5RXhpc3RzKHtcbiAgICBuaWNrbmFtZSxcbiAgICBlbWFpbCxcbiAgfTogQ2hlY2tJZlVzZXJBbHJlYWR5RXhpc3RzUmVwb3NpdG9yeVF1ZXJ5KTogUHJvbWlzZTxVc2VyW10+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmN1c3RvbSgpXG4gICAgICAuY3JlYXRlUXVlcnlCdWlsZGVyKClcbiAgICAgIC5sZWZ0Sm9pbkFuZFNlbGVjdCgnVXNlci5yb2xlJywgJ3JvbGUnKVxuICAgICAgLndoZXJlKCdVc2VyLm5pY2tuYW1lID0gOm5pY2tuYW1lIE9SIFVzZXIuZW1haWwgPSA6ZW1haWwnLCB7XG4gICAgICAgIG5pY2tuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgIH0pXG4gICAgICAuZ2V0TWFueSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuZGJNYXBwZXIubWFwcGVyLm1hcDxVc2VyRW50aXR5W10sIFVzZXJbXT4oXG4gICAgICB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5VU0VSX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLlVTRVJfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIHJlc3VsdFxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVc2VyUmVwb3NpdG9yeSIsIlJlcG9zaXRvcnkiLCJjb25zdHJ1Y3RvciIsImRiTWFwcGVyIiwiVXNlckVudGl0eSIsImFkZFVzZXIiLCJuaWNrbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlSWQiLCJ1c2VyIiwiaGFzaFN5bmMiLCJtZW1iZXJSb2xlIiwiUm9sZSIsImlkIiwicm9sZSIsInNhdmVkVXNlciIsInNhdmUiLCJtYXBwZXIiLCJtYXAiLCJkZXN0aW5hdGlvbiIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiVVNFUl9ET01BSU4iLCJzb3VyY2UiLCJEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIiwiVVNFUl9FTlRJVFkiLCJyZW1vdmVVc2VyIiwicmVzdWx0IiwiY3VzdG9tIiwiY3JlYXRlUXVlcnlCdWlsZGVyIiwibGVmdEpvaW5BbmRTZWxlY3QiLCJ3aGVyZSIsImdldE9uZSIsIkJhc2VFcnJvciIsIkluZnJhc3RydWN0dXJlRXJyb3JzIiwiVVNFUl9OT1RfRk9VTkQiLCJyZW1vdmUiLCJmaW5kVXNlckJ5RW1haWwiLCJnZXRNYW55IiwiZ2V0VXNlciIsImdldFVzZXJzIiwidXNlcnMiLCJjaGVja0lmVXNlckFscmVhZHlFeGlzdHMiLCJpbmplY3QiLCJJTkZSQVNUUlVDVFVSRV9JREVOVElGSUVSUyIsIkRCX01BUFBFUiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF1QmFBOzthQUFBQTs7MkJBdkJVO3dCQUVFO21DQUVrQjs2Q0FLcEM7MEJBQ2tCO3NCQUVVOzRCQUVSO3NCQUNOO3NDQUlnQjsyQkFDWDs7Ozs7Ozs7Ozs7Ozs7O0FBR25CLE1BQU1BLHVCQUNIQyxzQkFBVTtJQUdsQkMsWUFFbUJDLFNBQ2pCO1FBQ0EsS0FBSyxDQUFDQyxVQUFVO3dCQUZDRDtJQUduQjtJQUVBLE1BQU1FLFFBQVEsRUFDWkMsU0FBUSxFQUNSQyxNQUFLLEVBQ0xDLFNBQVEsRUFDUkMsT0FBTSxFQUNtQixFQUFpQjtRQUMxQyxNQUFNQyxPQUFPLElBQUlOLFVBQVU7UUFFM0JNLEtBQUtKLFFBQVEsR0FBR0E7UUFDaEJJLEtBQUtILEtBQUssR0FBR0E7UUFDYkcsS0FBS0YsUUFBUSxHQUFHRyxJQUFBQSxnQkFBUSxFQUFDSCxVQUFV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