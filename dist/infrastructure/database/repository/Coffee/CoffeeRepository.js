"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoffeeRepository", {
    enumerable: true,
    get: ()=>CoffeeRepository
});
const _inversify = require("inversify");
const _repository = require("../common/Repository");
const _coffee = require("../../entities/Coffee");
const _dbmapper = require("../../mappings/DBMapper");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
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
class CoffeeRepository extends _repository.Repository {
    constructor(dbMapper){
        super(_coffee.Coffee);
        this.dbMapper = dbMapper;
    }
    async findAllCoffees() {
        const coffees = await this.custom().createQueryBuilder().leftJoinAndSelect('Coffee.reviews', 'Review').getMany();
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
        }, coffees);
    }
    async findOneCoffee({ id  }) {
        const coffee = await this.custom().createQueryBuilder().leftJoinAndSelect('Coffee.reviews', 'Review').where('Coffee.id = :id ', {
            id
        }).getOne();
        if (!coffee) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.COFFEE_NOT_FOUND]);
        }
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
        }, coffee);
    }
    async createCoffee({ CoffeeStatus , brand , name , type , imgUrl , description , burntLvl , reflink  }) {
        const coffee = new _coffee.Coffee();
        coffee.brand = brand;
        coffee.name = name;
        coffee.type = type;
        coffee.imgUrl = imgUrl;
        coffee.description = description;
        coffee.burntLvl = burntLvl;
        coffee.reflink = reflink;
        coffee.CoffeeStatus = CoffeeStatus;
        coffee.createdAt = new Date();
        coffee.type = type;
        coffee.reviews = [];
        const savedCoffee = await this.save(coffee);
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
        }, savedCoffee);
    }
    async updateCoffee({ coffee , coffeeId  }) {
        const updatedCoffee = await this.custom().createQueryBuilder().update(_coffee.Coffee).set({
            ...coffee
        }).where('id = :id', {
            id: coffeeId
        }).execute();
        return updatedCoffee;
    }
    // TODO: make it transational
    async deleteCoffee({ id  }) {
        const result = await this.custom().createQueryBuilder().leftJoinAndSelect('Coffee.reviews', 'Review').where('Coffee.id = :id ', {
            id
        }).getOne();
        if (!result) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.COFFEE_NOT_FOUND]);
        }
        this.remove(result);
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
        }, result);
    }
}
CoffeeRepository = __decorate([
    __param(0, (0, _inversify.inject)(_infrastructureModuleSymbols.INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _dbmapper.DBMapper === "undefined" ? Object : _dbmapper.DBMapper
    ])
], CoffeeRepository);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L0NvZmZlZS9Db2ZmZWVSZXBvc2l0b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IFVwZGF0ZVJlc3VsdCB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvcmVwb3NpdG9yeS9jb21tb24vUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2ZmZWUgYXMgQ29mZmVlRW50aXR5IH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW50aXRpZXMvQ29mZmVlJztcbmltcG9ydCB7IElDb2ZmZWVSZXBvc2l0b3J5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvSUNvZmZlZVJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L2NvbW1hbmQvQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQnO1xuaW1wb3J0IHsgREJNYXBwZXIgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9EQk1hcHBlcic7XG5pbXBvcnQge1xuICBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLFxuICBJTkZSQVNUUlVDVFVSRV9JREVOVElGSUVSUyxcbn0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvSW5mcmFzdHJ1Y3R1cmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBEZWxldGVDb2ZmZWVSZXBvc2l0b3J5Q29tbWFuZCB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL3JlcG9zaXRvcnkvY29tbWFuZC9EZWxldGVDb2ZmZWVSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBJbmZyYXN0cnVjdHVyZUVycm9ycyB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2NvbW1vbi9lcnJvcnMvSW5mcmFzdHJ1Y3R1cmVFcnJvcnMnO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAnY29yZS9jb21tb24vZXJyb3JzL0Jhc2VFcnJvcic7XG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlJztcbmltcG9ydCB7IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9Vbml0T2ZXb3JrL3F1ZXJ5L0ZpbmRDb2ZmZWVSZXBvc2l0b3J5UXVlcnknO1xuaW1wb3J0IHsgVXBkYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L2NvbW1hbmQvVXBkYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgQ29mZmVlUmVwb3NpdG9yeVxuICBleHRlbmRzIFJlcG9zaXRvcnk8Q29mZmVlRW50aXR5PlxuICBpbXBsZW1lbnRzIElDb2ZmZWVSZXBvc2l0b3J5XG57XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoSU5GUkFTVFJVQ1RVUkVfSURFTlRJRklFUlMuREJfTUFQUEVSKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGJNYXBwZXI6IERCTWFwcGVyXG4gICkge1xuICAgIHN1cGVyKENvZmZlZUVudGl0eSk7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsQ29mZmVlcygpOiBQcm9taXNlPENvZmZlZVtdPiB7XG4gICAgY29uc3QgY29mZmVlcyA9IGF3YWl0IHRoaXMuY3VzdG9tKClcbiAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxuICAgICAgLmxlZnRKb2luQW5kU2VsZWN0KCdDb2ZmZWUucmV2aWV3cycsICdSZXZpZXcnKVxuICAgICAgLmdldE1hbnkoKTtcblxuICAgIHJldHVybiB0aGlzLmRiTWFwcGVyLm1hcHBlci5tYXA8Q29mZmVlRW50aXR5W10sIENvZmZlZVtdPihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLkNPRkZFRV9ET01BSU4sXG4gICAgICAgIHNvdXJjZTogREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUy5DT0ZGRUVfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIGNvZmZlZXNcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZmluZE9uZUNvZmZlZSh7IGlkIH06IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkpOiBQcm9taXNlPENvZmZlZT4ge1xuICAgIGNvbnN0IGNvZmZlZSA9IGF3YWl0IHRoaXMuY3VzdG9tKClcbiAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxuICAgICAgLmxlZnRKb2luQW5kU2VsZWN0KCdDb2ZmZWUucmV2aWV3cycsICdSZXZpZXcnKVxuICAgICAgLndoZXJlKCdDb2ZmZWUuaWQgPSA6aWQgJywgeyBpZCB9KVxuICAgICAgLmdldE9uZSgpO1xuXG4gICAgaWYgKCFjb2ZmZWUpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXJyb3IoXG4gICAgICAgIEluZnJhc3RydWN0dXJlRXJyb3JzW0luZnJhc3RydWN0dXJlRXJyb3JzLkNPRkZFRV9OT1RfRk9VTkRdXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRiTWFwcGVyLm1hcHBlci5tYXA8Q29mZmVlRW50aXR5LCBDb2ZmZWU+KFxuICAgICAge1xuICAgICAgICBkZXN0aW5hdGlvbjogRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMuQ09GRkVFX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLkNPRkZFRV9FTlRJVFksXG4gICAgICB9LFxuICAgICAgY29mZmVlXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUNvZmZlZSh7XG4gICAgQ29mZmVlU3RhdHVzLFxuICAgIGJyYW5kLFxuICAgIG5hbWUsXG4gICAgdHlwZSxcbiAgICBpbWdVcmwsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgYnVybnRMdmwsXG4gICAgcmVmbGluayxcbiAgfTogQ3JlYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQpOiBQcm9taXNlPENvZmZlZT4ge1xuICAgIGNvbnN0IGNvZmZlZSA9IG5ldyBDb2ZmZWVFbnRpdHkoKTtcbiAgICBjb2ZmZWUuYnJhbmQgPSBicmFuZDtcbiAgICBjb2ZmZWUubmFtZSA9IG5hbWU7XG4gICAgY29mZmVlLnR5cGUgPSB0eXBlO1xuICAgIGNvZmZlZS5pbWdVcmwgPSBpbWdVcmw7XG4gICAgY29mZmVlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgY29mZmVlLmJ1cm50THZsID0gYnVybnRMdmw7XG4gICAgY29mZmVlLnJlZmxpbmsgPSByZWZsaW5rO1xuICAgIGNvZmZlZS5Db2ZmZWVTdGF0dXMgPSBDb2ZmZWVTdGF0dXM7XG4gICAgY29mZmVlLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgY29mZmVlLnR5cGUgPSB0eXBlO1xuXG4gICAgY29mZmVlLnJldmlld3MgPSBbXTtcbiAgICBjb25zdCBzYXZlZENvZmZlZSA9IGF3YWl0IHRoaXMuc2F2ZShjb2ZmZWUpO1xuXG4gICAgcmV0dXJuIHRoaXMuZGJNYXBwZXIubWFwcGVyLm1hcDxDb2ZmZWVFbnRpdHksIENvZmZlZT4oXG4gICAgICB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5DT0ZGRUVfRE9NQUlOLFxuICAgICAgICBzb3VyY2U6IERBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMuQ09GRkVFX0VOVElUWSxcbiAgICAgIH0sXG4gICAgICBzYXZlZENvZmZlZVxuICAgICk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVDb2ZmZWUoe1xuICAgIGNvZmZlZSxcbiAgICBjb2ZmZWVJZCxcbiAgfTogVXBkYXRlQ29mZmVlUmVwb3NpdG9yeUNvbW1hbmQpOiBQcm9taXNlPFVwZGF0ZVJlc3VsdD4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDb2ZmZWUgPSBhd2FpdCB0aGlzLmN1c3RvbSgpXG4gICAgICAuY3JlYXRlUXVlcnlCdWlsZGVyKClcbiAgICAgIC51cGRhdGUoQ29mZmVlRW50aXR5KVxuICAgICAgLnNldCh7IC4uLmNvZmZlZSB9KVxuICAgICAgLndoZXJlKCdpZCA9IDppZCcsIHsgaWQ6IGNvZmZlZUlkIH0pXG4gICAgICAuZXhlY3V0ZSgpO1xuXG4gICAgcmV0dXJuIHVwZGF0ZWRDb2ZmZWU7XG4gIH1cblxuICAvLyBUT0RPOiBtYWtlIGl0IHRyYW5zYXRpb25hbFxuICBhc3luYyBkZWxldGVDb2ZmZWUoeyBpZCB9OiBEZWxldGVDb2ZmZWVSZXBvc2l0b3J5Q29tbWFuZCk6IFByb21pc2U8Q29mZmVlPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jdXN0b20oKVxuICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXG4gICAgICAubGVmdEpvaW5BbmRTZWxlY3QoJ0NvZmZlZS5yZXZpZXdzJywgJ1JldmlldycpXG4gICAgICAud2hlcmUoJ0NvZmZlZS5pZCA9IDppZCAnLCB7IGlkIH0pXG4gICAgICAuZ2V0T25lKCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFcnJvcihcbiAgICAgICAgSW5mcmFzdHJ1Y3R1cmVFcnJvcnNbSW5mcmFzdHJ1Y3R1cmVFcnJvcnMuQ09GRkVFX05PVF9GT1VORF1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmUocmVzdWx0KTtcblxuICAgIHJldHVybiB0aGlzLmRiTWFwcGVyLm1hcHBlci5tYXA8Q29mZmVlRW50aXR5LCBDb2ZmZWU+KFxuICAgICAge1xuICAgICAgICBkZXN0aW5hdGlvbjogRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMuQ09GRkVFX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLkNPRkZFRV9FTlRJVFksXG4gICAgICB9LFxuICAgICAgcmVzdWx0XG4gICAgKTtcbiAgfVxuXG4gIC8vIHNvcnRBbmRQYWdpbmF0ZSh7XG4gIC8vICAgc29ydEJ5LFxuICAvLyAgIHNraXAsXG4gIC8vICAgdGFrZSxcbiAgLy8gfTogU2VhcmNoUmVwb3NpdG9yeVF1ZXJ5KTogUHJvbWlzZTxDb2ZmZWU+IHtcbiAgLy8gICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmN1c3RvbSgpLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpLmFkZE9yZGVyQnkoc29ydEIsIHNraXAsIHRha2UpKVxuICAvLyB9XG59XG4iXSwibmFtZXMiOlsiQ29mZmVlUmVwb3NpdG9yeSIsIlJlcG9zaXRvcnkiLCJjb25zdHJ1Y3RvciIsImRiTWFwcGVyIiwiQ29mZmVlRW50aXR5IiwiZmluZEFsbENvZmZlZXMiLCJjb2ZmZWVzIiwiY3VzdG9tIiwiY3JlYXRlUXVlcnlCdWlsZGVyIiwibGVmdEpvaW5BbmRTZWxlY3QiLCJnZXRNYW55IiwibWFwcGVyIiwibWFwIiwiZGVzdGluYXRpb24iLCJET01BSU5fTUFQUElOR19JREVOVElGSUVSUyIsIkNPRkZFRV9ET01BSU4iLCJzb3VyY2UiLCJEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIiwiQ09GRkVFX0VOVElUWSIsImZpbmRPbmVDb2ZmZWUiLCJpZCIsImNvZmZlZSIsIndoZXJlIiwiZ2V0T25lIiwiQmFzZUVycm9yIiwiSW5mcmFzdHJ1Y3R1cmVFcnJvcnMiLCJDT0ZGRUVfTk9UX0ZPVU5EIiwiY3JlYXRlQ29mZmVlIiwiQ29mZmVlU3RhdHVzIiwiYnJhbmQiLCJuYW1lIiwidHlwZSIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwiYnVybnRMdmwiLCJyZWZsaW5rIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInJldmlld3MiLCJzYXZlZENvZmZlZSIsInNhdmUiLCJ1cGRhdGVDb2ZmZWUiLCJjb2ZmZWVJZCIsInVwZGF0ZWRDb2ZmZWUiLCJ1cGRhdGUiLCJzZXQiLCJleGVjdXRlIiwiZGVsZXRlQ29mZmVlIiwicmVzdWx0IiwicmVtb3ZlIiwiaW5qZWN0IiwiSU5GUkFTVFJVQ1RVUkVfSURFTlRJRklFUlMiLCJEQl9NQVBQRVIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcUJhQTs7YUFBQUE7OzJCQXJCVTs0QkFJSTt3QkFDWTswQkFHZDs2Q0FJbEI7bUNBQ29DO3NDQUVOOzJCQUNYOzs7Ozs7Ozs7Ozs7Ozs7QUFLbkIsTUFBTUEseUJBQ0hDLHNCQUFVO0lBR2xCQyxZQUVtQkMsU0FDakI7UUFDQSxLQUFLLENBQUNDLGNBQVk7d0JBRkREO0lBR25CO0lBRUEsTUFBTUUsaUJBQW9DO1FBQ3hDLE1BQU1DLFVBQVUsTUFBTSxJQUFJLENBQUNDLE1BQU0sR0FDOUJDLGtCQUFrQixHQUNsQkMsaUJBQWlCLENBQUMsa0JBQWtCLFVBQ3BDQyxPQUFPO1FBRVYsT0FBTyxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDQyxHQUFHLENBQzdCO1lBQ0VDLGFBQWFDLDZDQUEwQixDQUFDQyxhQUFhO1lBQ3JEQyxRQUFRQyx5REFBNEIsQ0FBQ0MsYUFBYTtRQUNwRCxHQUNBWjtJQUVKO0lBRUEsTUFBTWEsY0FBYyxFQUFFQyxHQUFFLEVBQWdDLEVBQW1CO1FBQ3pFLE1BQU1DLFNBQVMsTUFBTSxJQUFJLENBQUNkLE1BQU0sR0FDN0JDLGtCQUFrQixHQUNsQkMsaUJBQWlCLENBQUMsa0JBQWtCLFVBQ3BDYSxLQUFLLENBQUMsb0JBQW9CO1lBQUVGO1FBQUcsR0FDL0JHLE1BQU07UUFFVCxJQUFJLENBQUNGLFFBQVE7WUFDWCxNQUFNLElBQUlHLG9CQUFTLENBQ2pCQywwQ0FBb0IsQ0FBQ0EsMENBQW9CLENBQUNDLGdCQUFnQixDQUFDLEVBQzNEO1FBQ0osQ0FBQztRQUVELE9B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