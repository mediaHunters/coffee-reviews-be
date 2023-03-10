"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>Model
});
const _typeorm = require("typeorm");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Model extends _typeorm.BaseEntity {
}
__decorate([
    (0, _typeorm.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Model.prototype, "id", void 0);
__decorate([
    (0, _typeorm.CreateDateColumn)(),
    __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Model.prototype, "createdAt", void 0);
__decorate([
    (0, _typeorm.UpdateDateColumn)(),
    __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Model.prototype, "updatedAt", void 0);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9CYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIFVwZGF0ZURhdGVDb2x1bW4sXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIEJhc2VFbnRpdHksXG59IGZyb20gJ3R5cGVvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBNb2RlbCBleHRlbmRzIEJhc2VFbnRpdHkge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXG4gIGlkITogc3RyaW5nO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKClcbiAgY3JlYXRlZEF0ITogRGF0ZTtcblxuICBAVXBkYXRlRGF0ZUNvbHVtbigpXG4gIHVwZGF0ZWRBdCE6IERhdGU7XG59XG4iXSwibmFtZXMiOlsiTW9kZWwiLCJCYXNlRW50aXR5IiwiUHJpbWFyeUdlbmVyYXRlZENvbHVtbiIsIkNyZWF0ZURhdGVDb2x1bW4iLCJVcGRhdGVEYXRlQ29sdW1uIl0sIm1hcHBpbmdzIjoiOzs7OytCQU9BOzthQUE4QkE7O3lCQUZ2Qjs7Ozs7Ozs7OztBQUVRLE1BQWVBLGNBQWNDLG1CQUFVO0FBU3REOztJQVJHQyxJQUFBQSwrQkFBc0IsRUFBQzs7R0FESUY7O0lBSTNCRyxJQUFBQSx5QkFBZ0I7cUNBQ0wsZ0NBQUE7R0FMZ0JIOztJQU8zQkksSUFBQUEseUJBQWdCO3FDQUNMLGdDQUFBO0dBUmdCSiJ9