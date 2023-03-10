"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Coffee", {
    enumerable: true,
    get: ()=>Coffee
});
const _typeorm = require("typeorm");
const _coffeeType = require("../../../core/domain/Coffee/CoffeeType");
const _coffeeBurnLvl = require("../../../core/domain/Coffee/CoffeeBurnLvl");
const _coffeStatus = require("../enum/CoffeStatus");
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
let Coffee = class Coffee extends _base.default {
};
__decorate([
    (0, _typeorm.Column)('text'),
    __metadata("design:type", String)
], Coffee.prototype, "brand", void 0);
__decorate([
    (0, _typeorm.Column)('text'),
    __metadata("design:type", String)
], Coffee.prototype, "name", void 0);
__decorate([
    (0, _typeorm.Column)({
        enum: _coffeeType.COFFEE_TYPE,
        nullable: false,
        type: 'enum'
    }),
    __metadata("design:type", String)
], Coffee.prototype, "type", void 0);
__decorate([
    (0, _typeorm.Column)('text'),
    __metadata("design:type", String)
], Coffee.prototype, "imgUrl", void 0);
__decorate([
    (0, _typeorm.Column)('text'),
    __metadata("design:type", String)
], Coffee.prototype, "description", void 0);
__decorate([
    (0, _typeorm.Column)({
        enum: _coffeeBurnLvl.COFFEE_BURNT_LVL,
        nullable: false,
        type: 'enum'
    }),
    __metadata("design:type", String)
], Coffee.prototype, "burntLvl", void 0);
__decorate([
    (0, _typeorm.Column)('text'),
    __metadata("design:type", String)
], Coffee.prototype, "reflink", void 0);
__decorate([
    (0, _typeorm.Column)({
        enum: _coffeStatus.COFFEE_STATUS,
        nullable: false,
        type: 'enum',
        default: _coffeStatus.COFFEE_STATUS.WAITING_QUEUE
    }),
    __metadata("design:type", String)
], Coffee.prototype, "CoffeeStatus", void 0);
__decorate([
    (0, _typeorm.OneToMany)('Review', (Review)=>Review.coffee, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Coffee.prototype, "reviews", void 0);
Coffee = __decorate([
    (0, _typeorm.Entity)()
], Coffee);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Db2ZmZWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIE9uZVRvTWFueSB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBDT0ZGRUVfVFlQRSB9IGZyb20gJ2NvcmUvZG9tYWluL0NvZmZlZS9Db2ZmZWVUeXBlJztcbmltcG9ydCB7IENPRkZFRV9CVVJOVF9MVkwgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlQnVybkx2bCc7XG5pbXBvcnQgdHlwZSB7IFJldmlldyB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL1Jldmlldyc7XG5pbXBvcnQgeyBDT0ZGRUVfU1RBVFVTIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW51bS9Db2ZmZVN0YXR1cyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW50aXRpZXMvQmFzZSc7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIENvZmZlZSBleHRlbmRzIE1vZGVsIHtcbiAgQENvbHVtbigndGV4dCcpXG4gIGJyYW5kITogc3RyaW5nO1xuXG4gIEBDb2x1bW4oJ3RleHQnKVxuICBuYW1lITogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIGVudW06IENPRkZFRV9UWVBFLFxuICAgIG51bGxhYmxlOiBmYWxzZSxcbiAgICB0eXBlOiAnZW51bScsXG4gIH0pXG4gIHR5cGUhOiBzdHJpbmc7XG5cbiAgQENvbHVtbigndGV4dCcpXG4gIGltZ1VybCE6IHN0cmluZztcblxuICBAQ29sdW1uKCd0ZXh0JylcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgZW51bTogQ09GRkVFX0JVUk5UX0xWTCxcbiAgICBudWxsYWJsZTogZmFsc2UsXG4gICAgdHlwZTogJ2VudW0nLFxuICB9KVxuICBidXJudEx2bCE6IHN0cmluZztcblxuICBAQ29sdW1uKCd0ZXh0JylcbiAgcmVmbGluayE6IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICBlbnVtOiBDT0ZGRUVfU1RBVFVTLFxuICAgIG51bGxhYmxlOiBmYWxzZSxcbiAgICB0eXBlOiAnZW51bScsXG4gICAgZGVmYXVsdDogQ09GRkVFX1NUQVRVUy5XQUlUSU5HX1FVRVVFLFxuICB9KVxuICBDb2ZmZWVTdGF0dXMhOiBzdHJpbmc7XG5cbiAgQE9uZVRvTWFueSgnUmV2aWV3JywgKFJldmlldzogUmV2aWV3KSA9PiBSZXZpZXcuY29mZmVlLCB7XG4gICAgY2FzY2FkZTogdHJ1ZSxcbiAgfSlcbiAgcmV2aWV3cyE6IFJldmlld1tdO1xufVxuIl0sIm5hbWVzIjpbIkNvZmZlZSIsIk1vZGVsIiwiQ29sdW1uIiwiZW51bSIsIkNPRkZFRV9UWVBFIiwibnVsbGFibGUiLCJ0eXBlIiwiQ09GRkVFX0JVUk5UX0xWTCIsIkNPRkZFRV9TVEFUVVMiLCJkZWZhdWx0IiwiV0FJVElOR19RVUVVRSIsIk9uZVRvTWFueSIsIlJldmlldyIsImNvZmZlZSIsImNhc2NhZGUiLCJFbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBU2FBOzthQUFBQTs7eUJBVDZCOzRCQUVkOytCQUNLOzZCQUVIOzJEQUNaOzs7Ozs7Ozs7Ozs7Ozs7SUFHTEEsU0FBTixxQkFBcUJDLGFBQUs7QUEwQ2pDOztJQXpDR0MsSUFBQUEsZUFBTSxFQUFDOztHQURHRjs7SUFJVkUsSUFBQUEsZUFBTSxFQUFDOztHQUpHRjs7SUFPVkUsSUFBQUEsZUFBTSxFQUFDO1FBQ05DLE1BQU1DLHVCQUFXO1FBQ2pCQyxVQUFVLEtBQUs7UUFDZkMsTUFBTTtJQUNSOztHQVhXTjs7SUFjVkUsSUFBQUEsZUFBTSxFQUFDOztHQWRHRjs7SUFpQlZFLElBQUFBLGVBQU0sRUFBQzs7R0FqQkdGOztJQW9CVkUsSUFBQUEsZUFBTSxFQUFDO1FBQ05DLE1BQU1JLCtCQUFnQjtRQUN0QkYsVUFBVSxLQUFLO1FBQ2ZDLE1BQU07SUFDUjs7R0F4QldOOztJQTJCVkUsSUFBQUEsZUFBTSxFQUFDOztHQTNCR0Y7O0lBOEJWRSxJQUFBQSxlQUFNLEVBQUM7UUFDTkMsTUFBTUssMEJBQWE7UUFDbkJILFVBQVUsS0FBSztRQUNmQyxNQUFNO1FBQ05HLFNBQVNELDBCQUFhLENBQUNFLGFBQWE7SUFDdEM7O0dBbkNXVjs7SUFzQ1ZXLElBQUFBLGtCQUFTLEVBQUMsVUFBVSxDQUFDQyxTQUFtQkEsT0FBT0MsTUFBTSxFQUFFO1FBQ3REQyxTQUFTLElBQUk7SUFDZjs7R0F4Q1dkO0FBQUFBO0lBRFplLElBQUFBLGVBQU07R0FDTWYifQ==