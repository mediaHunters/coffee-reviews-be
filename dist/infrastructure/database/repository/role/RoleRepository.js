"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleRepository", {
    enumerable: true,
    get: ()=>RoleRepository
});
const _inversify = require("inversify");
const _typeorm = require("typeorm");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _baseError = require("../../../../core/common/errors/BaseError");
const _role = require("../../entities/Role");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const _repository = require("../common/Repository");
const _infrastructureErrors = require("../../../common/errors/InfrastructureErrors");
const _dbmapper = require("../../mappings/DBMapper");
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
let RoleRepository = class RoleRepository extends _repository.Repository {
    constructor(dbMapper){
        super(_role.Role);
        this.dbMapper = dbMapper;
    }
    async findRole({ id  }) {
        const role = await this.find(id);
        if (!role) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.ROLE_NOT_FOUND]);
        }
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
        }, role);
    }
    async findRoleByName({ name  }) {
        const role = await this.custom().createQueryBuilder().where('"Role"."name" = :name', {
            name
        }).getOne();
        if (!role) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.ROLE_NOT_FOUND]);
        }
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
        }, role);
    }
};
RoleRepository = __decorate([
    (0, _inversify.injectable)(),
    (0, _typeorm.EntityRepository)(_role.Role),
    __param(0, (0, _inversify.inject)(_infrastructureModuleSymbols.INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _dbmapper.DBMapper === "undefined" ? Object : _dbmapper.DBMapper
    ])
], RoleRepository);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L3JvbGUvUm9sZVJlcG9zaXRvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBGaW5kUm9sZVJlcG9zaXRvcnlRdWVyeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUm9sZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L3F1ZXJ5L0ZpbmRSb2xlUmVwb3NpdG9yeVF1ZXJ5JztcbmltcG9ydCB7IElSb2xlUmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUm9sZS9JUm9sZVJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnY29yZS9kb21haW4vUm9sZS9Sb2xlJztcbmltcG9ydCB7IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBCYXNlRXJyb3IgfSBmcm9tICdjb3JlL2NvbW1vbi9lcnJvcnMvQmFzZUVycm9yJztcblxuaW1wb3J0IHsgUm9sZSBhcyBSb2xlRW50aXR5IH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW50aXRpZXMvUm9sZSc7XG5pbXBvcnQge1xuICBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLFxuICBJTkZSQVNUUlVDVFVSRV9JREVOVElGSUVSUyxcbn0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvSW5mcmFzdHJ1Y3R1cmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L2NvbW1vbi9SZXBvc2l0b3J5JztcbmltcG9ydCB7IEluZnJhc3RydWN0dXJlRXJyb3JzIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvY29tbW9uL2Vycm9ycy9JbmZyYXN0cnVjdHVyZUVycm9ycyc7XG5pbXBvcnQgeyBGaW5kUm9sZUJ5TmFtZVJlcG9zaXRvcnlRdWVyeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUm9sZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L3F1ZXJ5L0ZpbmRSb2xlQnlOYW1lUmVwb3NpdG9yeVF1ZXJ5JztcbmltcG9ydCB7IERCTWFwcGVyIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvbWFwcGluZ3MvREJNYXBwZXInO1xuXG5AaW5qZWN0YWJsZSgpXG5ARW50aXR5UmVwb3NpdG9yeShSb2xlRW50aXR5KVxuZXhwb3J0IGNsYXNzIFJvbGVSZXBvc2l0b3J5XG4gIGV4dGVuZHMgUmVwb3NpdG9yeTxSb2xlRW50aXR5PlxuICBpbXBsZW1lbnRzIElSb2xlUmVwb3NpdG9yeVxue1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KElORlJBU1RSVUNUVVJFX0lERU5USUZJRVJTLkRCX01BUFBFUilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRiTWFwcGVyOiBEQk1hcHBlclxuICApIHtcbiAgICBzdXBlcihSb2xlRW50aXR5KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRSb2xlKHsgaWQgfTogRmluZFJvbGVSZXBvc2l0b3J5UXVlcnkpOiBQcm9taXNlPFJvbGU+IHtcbiAgICBjb25zdCByb2xlID0gYXdhaXQgdGhpcy5maW5kKGlkKTtcblxuICAgIGlmICghcm9sZSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFcnJvcihcbiAgICAgICAgSW5mcmFzdHJ1Y3R1cmVFcnJvcnNbSW5mcmFzdHJ1Y3R1cmVFcnJvcnMuUk9MRV9OT1RfRk9VTkRdXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRiTWFwcGVyLm1hcHBlci5tYXA8Um9sZUVudGl0eSwgUm9sZT4oXG4gICAgICB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5ST0xFX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLlJPTEVfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIHJvbGVcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZmluZFJvbGVCeU5hbWUoeyBuYW1lIH06IEZpbmRSb2xlQnlOYW1lUmVwb3NpdG9yeVF1ZXJ5KTogUHJvbWlzZTxSb2xlPiB7XG4gICAgY29uc3Qgcm9sZSA9IGF3YWl0IHRoaXMuY3VzdG9tKClcbiAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxuICAgICAgLndoZXJlKCdcIlJvbGVcIi5cIm5hbWVcIiA9IDpuYW1lJywge1xuICAgICAgICBuYW1lLFxuICAgICAgfSlcbiAgICAgIC5nZXRPbmUoKTtcblxuICAgIGlmICghcm9sZSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFcnJvcihcbiAgICAgICAgSW5mcmFzdHJ1Y3R1cmVFcnJvcnNbSW5mcmFzdHJ1Y3R1cmVFcnJvcnMuUk9MRV9OT1RfRk9VTkRdXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRiTWFwcGVyLm1hcHBlci5tYXA8Um9sZUVudGl0eSwgUm9sZT4oXG4gICAgICB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5ST0xFX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLlJPTEVfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIHJvbGVcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUm9sZVJlcG9zaXRvcnkiLCJSZXBvc2l0b3J5IiwiY29uc3RydWN0b3IiLCJkYk1hcHBlciIsIlJvbGVFbnRpdHkiLCJmaW5kUm9sZSIsImlkIiwicm9sZSIsImZpbmQiLCJCYXNlRXJyb3IiLCJJbmZyYXN0cnVjdHVyZUVycm9ycyIsIlJPTEVfTk9UX0ZPVU5EIiwibWFwcGVyIiwibWFwIiwiZGVzdGluYXRpb24iLCJET01BSU5fTUFQUElOR19JREVOVElGSUVSUyIsIlJPTEVfRE9NQUlOIiwic291cmNlIiwiREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUyIsIlJPTEVfRU5USVRZIiwiZmluZFJvbGVCeU5hbWUiLCJuYW1lIiwiY3VzdG9tIiwiY3JlYXRlUXVlcnlCdWlsZGVyIiwid2hlcmUiLCJnZXRPbmUiLCJpbmplY3RhYmxlIiwiRW50aXR5UmVwb3NpdG9yeSIsImluamVjdCIsIklORlJBU1RSVUNUVVJFX0lERU5USUZJRVJTIiwiREJfTUFQUEVSIl0sIm1hcHBpbmdzIjoiOzs7OytCQXVCYUE7O2FBQUFBOzsyQkF2QnNCO3lCQUVGO21DQU1VOzJCQUNqQjtzQkFFUzs2Q0FJNUI7NEJBQ29CO3NDQUNVOzBCQUVaOzs7Ozs7Ozs7Ozs7Ozs7SUFJWkEsaUJBQU4sNkJBQ0dDLHNCQUFVO0lBR2xCQyxZQUVtQkMsU0FDakI7UUFDQSxLQUFLLENBQUNDLFVBQVU7d0JBRkNEO0lBR25CO0lBRUEsTUFBTUUsU0FBUyxFQUFFQyxHQUFFLEVBQTJCLEVBQWlCO1FBQzdELE1BQU1DLE9BQU8sTUFBTSxJQUFJLENBQUNDLElBQUksQ0FBQ0Y7UUFFN0IsSUFBSSxDQUFDQyxNQUFNO1lBQ1QsTUFBTSxJQUFJRSxvQkFBUyxDQUNqQkMsMENBQW9CLENBQUNBLDBDQUFvQixDQUFDQyxjQUFjLENBQUMsRUFDekQ7UUFDSixDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUNSLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDQyxHQUFHLENBQzdCO1lBQ0VDLGFBQWFDLDZDQUEwQixDQUFDQyxXQUFXO1lBQ25EQyxRQUFRQyx5REFBNEIsQ0FBQ0MsV0FBVztRQUNsRCxHQUNBWjtJQUVKO0lBRUEsTUFBTWEsZUFBZSxFQUFFQyxLQUFJLEVBQWlDLEVBQWlCO1FBQzNFLE1BQU1kLE9BQU8sTUFBTSxJQUFJLENBQUNlLE1BQU0sR0FDM0JDLGtCQUFrQixHQUNsQkMsS0FBSyxDQUFDLHlCQUF5QjtZQUM5Qkg7UUFDRixHQUNDSSxNQUFNO1FBRVQsSUFBSSxDQUFDbEIsTUFBTTtZQUNULE1BQU0sSUFBSUUsb0JBQVMsQ0FDakJDLDBDQUFvQixDQUFDQSwwQ0FBb0IsQ0FBQ0MsY0FBYyxDQUFDLEVBQ3pEO1FBQ0osQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDUixRQUFRLENBQUNTLE1BQU0sQ0FBQ0MsR0FBRyxDQUM3QjtZQUNFQyxhQUFhQyw2Q0FBMEIsQ0FBQ0MsV0FBVztZQUNuREMsUUFBUUMseURBQTRCLENBQUNDLFdBQVc7UUFDbEQsR0FDQVo7SUFFSjtBQUNGO0FBbkRhUDtJQUZaMEIsSUFBQUEscUJBQVU7SUFDVkMsSUFBQUEseUJBQWdCLEVBQUN2QixVQUFVO0lBTXZCd0IsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0MsdURBQTBCLENBQUNDLFNBQVM7OztlQUNqQixrQkFBUSw0QkFBUixrQkFBUTs7R0FOMUI5QiJ9