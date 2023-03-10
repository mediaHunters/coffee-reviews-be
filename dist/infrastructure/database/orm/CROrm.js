"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CROrm", {
    enumerable: true,
    get: ()=>CROrm
});
const _inversify = require("inversify");
const _typeorm = require("typeorm");
const _typeormTransactionalClsHooked = require("typeorm-transactional-cls-hooked");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let CROrm = class CROrm {
    async initialize() {
        await (0, _typeorm.createConnection)('default');
        (0, _typeormTransactionalClsHooked.initializeTransactionalContext)();
        (0, _typeormTransactionalClsHooked.patchTypeORMRepositoryWithBaseRepository)();
    }
};
CROrm = __decorate([
    (0, _inversify.injectable)()
], CROrm);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9vcm0vQ1JPcm0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7XG4gIGluaXRpYWxpemVUcmFuc2FjdGlvbmFsQ29udGV4dCxcbiAgcGF0Y2hUeXBlT1JNUmVwb3NpdG9yeVdpdGhCYXNlUmVwb3NpdG9yeSxcbn0gZnJvbSAndHlwZW9ybS10cmFuc2FjdGlvbmFsLWNscy1ob29rZWQnO1xuXG5pbXBvcnQgeyBJT3JtIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2Uvb3JtL0lPcm0nO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ1JPcm0gaW1wbGVtZW50cyBJT3JtIHtcbiAgcHVibGljIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgY3JlYXRlQ29ubmVjdGlvbignZGVmYXVsdCcpO1xuXG4gICAgaW5pdGlhbGl6ZVRyYW5zYWN0aW9uYWxDb250ZXh0KCk7XG4gICAgcGF0Y2hUeXBlT1JNUmVwb3NpdG9yeVdpdGhCYXNlUmVwb3NpdG9yeSgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ1JPcm0iLCJpbml0aWFsaXplIiwiY3JlYXRlQ29ubmVjdGlvbiIsImluaXRpYWxpemVUcmFuc2FjdGlvbmFsQ29udGV4dCIsInBhdGNoVHlwZU9STVJlcG9zaXRvcnlXaXRoQmFzZVJlcG9zaXRvcnkiLCJpbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQVdhQTs7YUFBQUE7OzJCQVhjO3lCQUNNOytDQUsxQjs7Ozs7OztJQUtNQSxRQUFOO0lBQ0wsTUFBYUMsYUFBNEI7UUFDdkMsTUFBTUMsSUFBQUEseUJBQWdCLEVBQUM7UUFFdkJDLElBQUFBLDZEQUE4QjtRQUM5QkMsSUFBQUEsdUVBQXdDO0lBQzFDO0FBQ0Y7QUFQYUo7SUFEWkssSUFBQUEscUJBQVU7R0FDRUwifQ==