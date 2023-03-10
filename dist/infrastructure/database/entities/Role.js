"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Role", {
    enumerable: true,
    get: ()=>Role
});
const _typeorm = require("typeorm");
const _userRole = require("../enum/UserRole");
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
let Role = class Role extends _base.default {
};
__decorate([
    (0, _typeorm.Column)({
        default: _userRole.USER_ROLE.MEMBER,
        enum: _userRole.USER_ROLE,
        nullable: false,
        type: 'enum'
    }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, _typeorm.OneToMany)('User', (user)=>user.role),
    __metadata("design:type", typeof User === "undefined" ? Object : User)
], Role.prototype, "user", void 0);
Role = __decorate([
    (0, _typeorm.Entity)()
], Role);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Sb2xlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBPbmVUb01hbnkgfSBmcm9tICd0eXBlb3JtJztcblxuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW51bS9Vc2VyUm9sZSc7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCBNb2RlbCBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9CYXNlJztcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgUm9sZSBleHRlbmRzIE1vZGVsIHtcbiAgQENvbHVtbih7XG4gICAgZGVmYXVsdDogVVNFUl9ST0xFLk1FTUJFUixcbiAgICBlbnVtOiBVU0VSX1JPTEUsXG4gICAgbnVsbGFibGU6IGZhbHNlLFxuICAgIHR5cGU6ICdlbnVtJyxcbiAgfSlcbiAgbmFtZSE6IHN0cmluZztcblxuICBAT25lVG9NYW55KCdVc2VyJywgKHVzZXI6IFVzZXIpID0+IHVzZXIucm9sZSlcbiAgdXNlciE6IFVzZXI7XG59XG4iXSwibmFtZXMiOlsiUm9sZSIsIk1vZGVsIiwiQ29sdW1uIiwiZGVmYXVsdCIsIlVTRVJfUk9MRSIsIk1FTUJFUiIsImVudW0iLCJudWxsYWJsZSIsInR5cGUiLCJPbmVUb01hbnkiLCJ1c2VyIiwicm9sZSIsIkVudGl0eSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFPYUE7O2FBQUFBOzt5QkFQNkI7MEJBRWhCOzJEQUVSOzs7Ozs7Ozs7Ozs7Ozs7SUFHTEEsT0FBTixtQkFBbUJDLGFBQUs7QUFXL0I7O0lBVkdDLElBQUFBLGVBQU0sRUFBQztRQUNOQyxTQUFTQyxtQkFBUyxDQUFDQyxNQUFNO1FBQ3pCQyxNQUFNRixtQkFBUztRQUNmRyxVQUFVLEtBQUs7UUFDZkMsTUFBTTtJQUNSOztHQU5XUjs7SUFTVlMsSUFBQUEsa0JBQVMsRUFBQyxRQUFRLENBQUNDLE9BQWVBLEtBQUtDLElBQUk7cUNBQ3JDLGdDQUFBO0dBVklYO0FBQUFBO0lBRFpZLElBQUFBLGVBQU07R0FDTVoifQ==