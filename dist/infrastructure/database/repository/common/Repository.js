"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Repository", {
    enumerable: true,
    get: ()=>Repository
});
const _typeorm = require("typeorm");
const _inversify = require("inversify");
const _objectType = require("typeorm/common/ObjectType");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Repository = class Repository extends _typeorm.AbstractRepository {
    constructor(entity){
        super();
        this.entity = entity;
    }
    async find(id) {
        return this.getDBRepository().findOne(id);
    }
    findBy(condition) {
        return this.getDBRepository().find(condition);
    }
    async findMany(ids) {
        return this.getDBRepository().findByIds(ids);
    }
    async findAll() {
        return this.getDBRepository().find();
    }
    async query(query, parameters) {
        return this.getDBRepository().query(query, parameters);
    }
    async update(condition, data) {
        return !!await this.getDBRepository().update(condition, data);
    }
    async updateAll(condition, data) {
        return !!await this.getDBRepository().update(condition, data);
    }
    async delete(condition) {
        return !!await this.getDBRepository().delete(condition);
    }
    async deleteAll(condition) {
        return !!await this.getDBRepository().delete(condition);
    }
    async remove(entity) {
        return this.getDBRepository().remove(entity);
    }
    async removeAll(entities) {
        return this.getDBRepository().remove(entities);
    }
    async save(entity) {
        return this.getDBRepository().save(entity);
    }
    async saveAll(entities) {
        return this.getDBRepository().save(entities);
    }
    custom() {
        return this.getDBRepository();
    }
    getConnectionName() {
        return process.env.ORM_CONNECTION;
    }
    getDBRepository() {
        return (0, _typeorm.getRepository)(this.entity, this.getConnectionName());
    }
};
Repository = __decorate([
    (0, _inversify.injectable)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _objectType.ObjectType === "undefined" ? Object : _objectType.ObjectType
    ])
], Repository);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L2NvbW1vbi9SZXBvc2l0b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0UmVwb3NpdG9yeSwgZ2V0UmVwb3NpdG9yeSwgT2JqZWN0TGl0ZXJhbCB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IE9iamVjdFR5cGUgfSBmcm9tICd0eXBlb3JtL2NvbW1vbi9PYmplY3RUeXBlJztcblxuaW1wb3J0IHsgUmVwb3NpdG9yeSBhcyBPUk1SZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybS9yZXBvc2l0b3J5L1JlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBJUmVwb3NpdG9yeSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL3JlcG9zaXRvcnkvY29tbW9uL0lSZXBvc2l0b3J5JztcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvcmVwb3NpdG9yeS9jb21tb24vUXVlcnknO1xuaW1wb3J0IHsgVXBkYXRlUXVlcnlEYXRhIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvcmVwb3NpdG9yeS9jb21tb24vVXBkYXRlUXVlcnlEYXRhJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlcG9zaXRvcnk8RSBleHRlbmRzIE9iamVjdExpdGVyYWw+XG4gIGV4dGVuZHMgQWJzdHJhY3RSZXBvc2l0b3J5PEU+XG4gIGltcGxlbWVudHMgSVJlcG9zaXRvcnk8RSwgT1JNUmVwb3NpdG9yeTxFPj5cbntcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGVudGl0eTogT2JqZWN0VHlwZTxFPikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZmluZChpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxFIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0REJSZXBvc2l0b3J5KCkuZmluZE9uZShpZCk7XG4gIH1cblxuICBwdWJsaWMgZmluZEJ5KGNvbmRpdGlvbjogUXVlcnk8RT4pOiBQcm9taXNlPEVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldERCUmVwb3NpdG9yeSgpLmZpbmQoY29uZGl0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBmaW5kTWFueShpZHM6IHN0cmluZ1tdIHwgbnVtYmVyW10pOiBQcm9taXNlPEVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldERCUmVwb3NpdG9yeSgpLmZpbmRCeUlkcyhpZHMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGZpbmRBbGwoKTogUHJvbWlzZTxFW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXREQlJlcG9zaXRvcnkoKS5maW5kKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcXVlcnkocXVlcnk6IHN0cmluZywgcGFyYW1ldGVycz86IGFueVtdKTogUHJvbWlzZTxFW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXREQlJlcG9zaXRvcnkoKS5xdWVyeShxdWVyeSwgcGFyYW1ldGVycyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlKFxuICAgIGNvbmRpdGlvbjogc3RyaW5nIHwgbnVtYmVyLFxuICAgIGRhdGE6IFVwZGF0ZVF1ZXJ5RGF0YTxFPlxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5nZXREQlJlcG9zaXRvcnkoKS51cGRhdGUoY29uZGl0aW9uLCBkYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlQWxsKFxuICAgIGNvbmRpdGlvbjogc3RyaW5nW10gfCBudW1iZXJbXSxcbiAgICBkYXRhOiBFXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiAhIShhd2FpdCB0aGlzLmdldERCUmVwb3NpdG9yeSgpLnVwZGF0ZShjb25kaXRpb24sIGRhdGEpKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGUoY29uZGl0aW9uOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gISEoYXdhaXQgdGhpcy5nZXREQlJlcG9zaXRvcnkoKS5kZWxldGUoY29uZGl0aW9uKSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlQWxsKGNvbmRpdGlvbjogc3RyaW5nW10gfCBudW1iZXJbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiAhIShhd2FpdCB0aGlzLmdldERCUmVwb3NpdG9yeSgpLmRlbGV0ZShjb25kaXRpb24pKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZW1vdmUoZW50aXR5OiBFKTogUHJvbWlzZTxFPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0REJSZXBvc2l0b3J5KCkucmVtb3ZlKGVudGl0eSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVtb3ZlQWxsKGVudGl0aWVzOiBFW10pOiBQcm9taXNlPEVbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldERCUmVwb3NpdG9yeSgpLnJlbW92ZShlbnRpdGllcyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2F2ZShlbnRpdHk6IEUpOiBQcm9taXNlPEU+IHtcbiAgICByZXR1cm4gdGhpcy5nZXREQlJlcG9zaXRvcnkoKS5zYXZlKGVudGl0eSBhcyBhbnkpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNhdmVBbGwoZW50aXRpZXM6IEVbXSk6IFByb21pc2U8RVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0REJSZXBvc2l0b3J5KCkuc2F2ZShlbnRpdGllcyBhcyBhbnkpO1xuICB9XG5cbiAgcHVibGljIGN1c3RvbSgpOiBPUk1SZXBvc2l0b3J5PEU+IHtcbiAgICByZXR1cm4gdGhpcy5nZXREQlJlcG9zaXRvcnkoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb25uZWN0aW9uTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5PUk1fQ09OTkVDVElPTjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0REJSZXBvc2l0b3J5KCk6IE9STVJlcG9zaXRvcnk8RT4ge1xuICAgIHJldHVybiBnZXRSZXBvc2l0b3J5PEU+KHRoaXMuZW50aXR5LCB0aGlzLmdldENvbm5lY3Rpb25OYW1lKCkpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVwb3NpdG9yeSIsIkFic3RyYWN0UmVwb3NpdG9yeSIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiZmluZCIsImlkIiwiZ2V0REJSZXBvc2l0b3J5IiwiZmluZE9uZSIsImZpbmRCeSIsImNvbmRpdGlvbiIsImZpbmRNYW55IiwiaWRzIiwiZmluZEJ5SWRzIiwiZmluZEFsbCIsInF1ZXJ5IiwicGFyYW1ldGVycyIsInVwZGF0ZSIsImRhdGEiLCJ1cGRhdGVBbGwiLCJkZWxldGUiLCJkZWxldGVBbGwiLCJyZW1vdmUiLCJyZW1vdmVBbGwiLCJlbnRpdGllcyIsInNhdmUiLCJzYXZlQWxsIiwiY3VzdG9tIiwiZ2V0Q29ubmVjdGlvbk5hbWUiLCJwcm9jZXNzIiwiZW52IiwiT1JNX0NPTk5FQ1RJT04iLCJnZXRSZXBvc2l0b3J5IiwiaW5qZWN0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFZc0JBOzthQUFBQTs7eUJBWjJDOzJCQUN0Qzs0QkFFQTs7Ozs7Ozs7OztJQVNMQSxhQUFmLHlCQUNHQywyQkFBa0I7SUFHMUJDLFlBQStCQyxPQUF1QjtRQUNwRCxLQUFLO3NCQUR3QkE7SUFFL0I7SUFFQSxNQUFhQyxLQUFLQyxFQUFtQixFQUEwQjtRQUM3RCxPQUFPLElBQUksQ0FBQ0MsZUFBZSxHQUFHQyxPQUFPLENBQUNGO0lBQ3hDO0lBRU9HLE9BQU9DLFNBQW1CLEVBQWdCO1FBQy9DLE9BQU8sSUFBSSxDQUFDSCxlQUFlLEdBQUdGLElBQUksQ0FBQ0s7SUFDckM7SUFFQSxNQUFhQyxTQUFTQyxHQUF3QixFQUFnQjtRQUM1RCxPQUFPLElBQUksQ0FBQ0wsZUFBZSxHQUFHTSxTQUFTLENBQUNEO0lBQzFDO0lBRUEsTUFBYUUsVUFBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUNQLGVBQWUsR0FBR0YsSUFBSTtJQUNwQztJQUVBLE1BQWFVLE1BQU1BLEtBQWEsRUFBRUMsVUFBa0IsRUFBZ0I7UUFDbEUsT0FBTyxJQUFJLENBQUNULGVBQWUsR0FBR1EsS0FBSyxDQUFDQSxPQUFPQztJQUM3QztJQUVBLE1BQWFDLE9BQ1hQLFNBQTBCLEVBQzFCUSxJQUF3QixFQUNOO1FBQ2xCLE9BQU8sQ0FBQyxDQUFFLE1BQU0sSUFBSSxDQUFDWCxlQUFlLEdBQUdVLE1BQU0sQ0FBQ1AsV0FBV1E7SUFDM0Q7SUFFQSxNQUFhQyxVQUNYVCxTQUE4QixFQUM5QlEsSUFBTyxFQUNXO1FBQ2xCLE9BQU8sQ0FBQyxDQUFFLE1BQU0sSUFBSSxDQUFDWCxlQUFlLEdBQUdVLE1BQU0sQ0FBQ1AsV0FBV1E7SUFDM0Q7SUFFQSxNQUFhRSxPQUFPVixTQUEwQixFQUFvQjtRQUNoRSxPQUFPLENBQUMsQ0FBRSxNQUFNLElBQUksQ0FBQ0gsZUFBZSxHQUFHYSxNQUFNLENBQUNWO0lBQ2hEO0lBRUEsTUFBYVcsVUFBVVgsU0FBOEIsRUFBb0I7UUFDdkUsT0FBTyxDQUFDLENBQUUsTUFBTSxJQUFJLENBQUNILGVBQWUsR0FBR2EsTUFBTSxDQUFDVjtJQUNoRDtJQUVBLE1BQWFZLE9BQU9sQixNQUFTLEVBQWM7UUFDekMsT0FBTyxJQUFJLENBQUNHLGVBQWUsR0FBR2UsTUFBTSxDQUFDbEI7SUFDdkM7SUFFQSxNQUFhbUIsVUFBVUMsUUFBYSxFQUFnQjtRQUNsRCxPQUFPLElBQUksQ0FBQ2pCLGVBQWUsR0FBR2UsTUFBTSxDQUFDRTtJQUN2QztJQUVBLE1BQWFDLEtBQUtyQixNQUFTLEVBQWM7UUFDdkMsT0FBTyxJQUFJLENBQUNHLGVBQWUsR0FBR2tCLElBQUksQ0FBQ3JCO0lBQ3JDO0lBRUEsTUFBYXNCLFFBQVFGLFFBQWEsRUFBZ0I7UUFDaEQsT0FBTyxJQUFJLENBQUNqQixlQUFlLEdBQUdrQixJQUFJLENBQUNEO0lBQ3JDO0lBRU9HLFNBQTJCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDcEIsZUFBZTtJQUM3QjtJQUVVcUIsb0JBQXdDO1FBQ2hELE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztJQUNuQztJQUVReEIsa0JBQW9DO1FBQzFDLE9BQU95QixJQUFBQSxzQkFBYSxFQUFJLElBQUksQ0FBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUN3QixpQkFBaUI7SUFDN0Q7QUFDRjtBQTdFc0IzQjtJQURyQmdDLElBQUFBLHFCQUFVOzs7ZUFLOEIsc0JBQVUsNEJBQVYsc0JBQVU7O0dBSjdCaEMifQ==