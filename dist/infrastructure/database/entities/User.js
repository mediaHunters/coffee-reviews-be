"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "User", {
    enumerable: true,
    get: ()=>User
});
const _typeorm = require("typeorm");
const _base = /*#__PURE__*/ _interopRequireDefault(require("./Base"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let User = class User extends _base.default {
    toJson() {
        return {
            ...this,
            password: undefined
        };
    }
};
__decorate([
    (0, _typeorm.Column)('text', {
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, _typeorm.Column)('text', {
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, _typeorm.Column)('text', {
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    (0, _typeorm.Column)('text'),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, _typeorm.Column)('text'),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, _typeorm.ManyToOne)('Role', (role)=>role.user),
    __metadata("design:type", typeof Role === "undefined" ? Object : Role)
], User.prototype, "role", void 0);
__decorate([
    (0, _typeorm.OneToMany)('Review', (review)=>review.user),
    __metadata("design:type", Array)
], User.prototype, "reviews", void 0);
User = __decorate([
    (0, _typeorm.Entity)()
], User);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Vc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBNYW55VG9PbmUsIE9uZVRvTWFueSB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgdHlwZSB7IFJvbGUgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Sb2xlJztcbmltcG9ydCB0eXBlIHsgUmV2aWV3IH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW50aXRpZXMvUmV2aWV3JztcbmltcG9ydCBNb2RlbCBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9CYXNlJztcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIE1vZGVsIHtcbiAgQENvbHVtbigndGV4dCcsIHtcbiAgICBudWxsYWJsZTogdHJ1ZSxcbiAgfSlcbiAgZmlyc3ROYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oJ3RleHQnLCB7XG4gICAgbnVsbGFibGU6IHRydWUsXG4gIH0pXG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oJ3RleHQnLCB7IHVuaXF1ZTogdHJ1ZSB9KVxuICBuaWNrbmFtZSE6IHN0cmluZztcblxuICBAQ29sdW1uKCd0ZXh0JylcbiAgZW1haWwhOiBzdHJpbmc7XG5cbiAgQENvbHVtbigndGV4dCcpXG4gIHBhc3N3b3JkITogc3RyaW5nO1xuXG4gIEBNYW55VG9PbmUoJ1JvbGUnLCAocm9sZTogUm9sZSkgPT4gcm9sZS51c2VyKVxuICByb2xlITogUm9sZTtcblxuICBAT25lVG9NYW55KCdSZXZpZXcnLCAocmV2aWV3OiBSZXZpZXcpID0+IHJldmlldy51c2VyKVxuICByZXZpZXdzITogUmV2aWV3W107XG5cbiAgdG9Kc29uKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMsXG4gICAgICBwYXNzd29yZDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVc2VyIiwiTW9kZWwiLCJ0b0pzb24iLCJwYXNzd29yZCIsInVuZGVmaW5lZCIsIkNvbHVtbiIsIm51bGxhYmxlIiwidW5pcXVlIiwiTWFueVRvT25lIiwicm9sZSIsInVzZXIiLCJPbmVUb01hbnkiLCJyZXZpZXciLCJFbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzthQUFBQTs7eUJBUHdDOzJEQUluQzs7Ozs7Ozs7Ozs7Ozs7O0lBR0xBLE9BQU4sbUJBQW1CQyxhQUFLO0lBMEI3QkMsU0FBYztRQUNaLE9BQU87WUFDTCxHQUFHLElBQUk7WUFDUEMsVUFBVUM7UUFDWjtJQUNGO0FBQ0Y7O0lBL0JHQyxJQUFBQSxlQUFNLEVBQUMsUUFBUTtRQUNkQyxVQUFVLElBQUk7SUFDaEI7O0dBSFdOOztJQU1WSyxJQUFBQSxlQUFNLEVBQUMsUUFBUTtRQUNkQyxVQUFVLElBQUk7SUFDaEI7O0dBUldOOztJQVdWSyxJQUFBQSxlQUFNLEVBQUMsUUFBUTtRQUFFRSxRQUFRLElBQUk7SUFBQzs7R0FYcEJQOztJQWNWSyxJQUFBQSxlQUFNLEVBQUM7O0dBZEdMOztJQWlCVkssSUFBQUEsZUFBTSxFQUFDOztHQWpCR0w7O0lBb0JWUSxJQUFBQSxrQkFBUyxFQUFDLFFBQVEsQ0FBQ0MsT0FBZUEsS0FBS0MsSUFBSTtxQ0FDckMsZ0NBQUE7R0FyQklWOztJQXVCVlcsSUFBQUEsa0JBQVMsRUFBQyxVQUFVLENBQUNDLFNBQW1CQSxPQUFPRixJQUFJOztHQXZCekNWO0FBQUFBO0lBRFphLElBQUFBLGVBQU07R0FDTWIifQ==