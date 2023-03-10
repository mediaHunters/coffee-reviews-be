"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DOMAIN_APPLICATION_SERVICE_IDENTIFIERS: ()=>DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
    DOMAIN_MAPPING_IDENTIFIERS: ()=>DOMAIN_MAPPING_IDENTIFIERS,
    DOMAIN_REPOSITORY_IDENTIFIERS: ()=>DOMAIN_REPOSITORY_IDENTIFIERS,
    DOMAIN_UNIT_OF_WORK_IDENTIFIERS: ()=>DOMAIN_UNIT_OF_WORK_IDENTIFIERS
});
const DOMAIN_APPLICATION_SERVICE_IDENTIFIERS = {
    USER_SERVICE: Symbol.for('UserService'),
    AUTHENTICATION_SERVICE: Symbol.for('AuthenticationService'),
    COFFEE_SERVICE: Symbol.for('CoffeeService'),
    REVIEW_SERVICE: Symbol.for('ReviewService')
};
const DOMAIN_MAPPING_IDENTIFIERS = {
    USER_DOMAIN: Symbol.for('UserDomain'),
    ROLE_DOMAIN: Symbol.for('RoleDomain'),
    COFFEE_DOMAIN: Symbol.for('CoffeeDomain'),
    REVIEW_DOMAIN: Symbol.for('ReviewDomain')
};
const DOMAIN_REPOSITORY_IDENTIFIERS = {
    ROLE_REPOSITORY: Symbol.for('RoleRepository'),
    USER_REPOSITORY: Symbol.for('UserRepository'),
    COFFEE_REPOSITORY: Symbol.for('CoffeeRepository'),
    REVIEW_REPOSITORY: Symbol.for('ReviewRepository')
};
const DOMAIN_UNIT_OF_WORK_IDENTIFIERS = {
    USER_UNIT_OF_WORK: Symbol.for('UserUnitOfWork'),
    COFFEE_UNIT_OF_WORK: Symbol.for('CoffeeUnitOfWork')
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL0NvcmVNb2R1bGVTeW1ib2xzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUyA9IHtcbiAgVVNFUl9TRVJWSUNFOiBTeW1ib2wuZm9yKCdVc2VyU2VydmljZScpLFxuICBBVVRIRU5USUNBVElPTl9TRVJWSUNFOiBTeW1ib2wuZm9yKCdBdXRoZW50aWNhdGlvblNlcnZpY2UnKSxcbiAgQ09GRkVFX1NFUlZJQ0U6IFN5bWJvbC5mb3IoJ0NvZmZlZVNlcnZpY2UnKSxcbiAgUkVWSUVXX1NFUlZJQ0U6IFN5bWJvbC5mb3IoJ1Jldmlld1NlcnZpY2UnKSxcbn07XG5cbmV4cG9ydCBjb25zdCBET01BSU5fTUFQUElOR19JREVOVElGSUVSUyA9IHtcbiAgVVNFUl9ET01BSU46IFN5bWJvbC5mb3IoJ1VzZXJEb21haW4nKSxcbiAgUk9MRV9ET01BSU46IFN5bWJvbC5mb3IoJ1JvbGVEb21haW4nKSxcbiAgQ09GRkVFX0RPTUFJTjogU3ltYm9sLmZvcignQ29mZmVlRG9tYWluJyksXG4gIFJFVklFV19ET01BSU46IFN5bWJvbC5mb3IoJ1Jldmlld0RvbWFpbicpLFxufTtcblxuZXhwb3J0IGNvbnN0IERPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTID0ge1xuICBST0xFX1JFUE9TSVRPUlk6IFN5bWJvbC5mb3IoJ1JvbGVSZXBvc2l0b3J5JyksXG4gIFVTRVJfUkVQT1NJVE9SWTogU3ltYm9sLmZvcignVXNlclJlcG9zaXRvcnknKSxcbiAgQ09GRkVFX1JFUE9TSVRPUlk6IFN5bWJvbC5mb3IoJ0NvZmZlZVJlcG9zaXRvcnknKSxcbiAgUkVWSUVXX1JFUE9TSVRPUlk6IFN5bWJvbC5mb3IoJ1Jldmlld1JlcG9zaXRvcnknKSxcbn07XG5cbmV4cG9ydCBjb25zdCBET01BSU5fVU5JVF9PRl9XT1JLX0lERU5USUZJRVJTID0ge1xuICBVU0VSX1VOSVRfT0ZfV09SSzogU3ltYm9sLmZvcignVXNlclVuaXRPZldvcmsnKSxcbiAgQ09GRkVFX1VOSVRfT0ZfV09SSzogU3ltYm9sLmZvcignQ29mZmVlVW5pdE9mV29yaycpLFxufTtcbiJdLCJuYW1lcyI6WyJET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUyIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiRE9NQUlOX1JFUE9TSVRPUllfSURFTlRJRklFUlMiLCJET01BSU5fVU5JVF9PRl9XT1JLX0lERU5USUZJRVJTIiwiVVNFUl9TRVJWSUNFIiwiU3ltYm9sIiwiZm9yIiwiQVVUSEVOVElDQVRJT05fU0VSVklDRSIsIkNPRkZFRV9TRVJWSUNFIiwiUkVWSUVXX1NFUlZJQ0UiLCJVU0VSX0RPTUFJTiIsIlJPTEVfRE9NQUlOIiwiQ09GRkVFX0RPTUFJTiIsIlJFVklFV19ET01BSU4iLCJST0xFX1JFUE9TSVRPUlkiLCJVU0VSX1JFUE9TSVRPUlkiLCJDT0ZGRUVfUkVQT1NJVE9SWSIsIlJFVklFV19SRVBPU0lUT1JZIiwiVVNFUl9VTklUX09GX1dPUksiLCJDT0ZGRUVfVU5JVF9PRl9XT1JLIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFhQSxzQ0FBc0MsTUFBdENBO0lBT0FDLDBCQUEwQixNQUExQkE7SUFPQUMsNkJBQTZCLE1BQTdCQTtJQU9BQywrQkFBK0IsTUFBL0JBOztBQXJCTixNQUFNSCx5Q0FBeUM7SUFDcERJLGNBQWNDLE9BQU9DLEdBQUcsQ0FBQztJQUN6QkMsd0JBQXdCRixPQUFPQyxHQUFHLENBQUM7SUFDbkNFLGdCQUFnQkgsT0FBT0MsR0FBRyxDQUFDO0lBQzNCRyxnQkFBZ0JKLE9BQU9DLEdBQUcsQ0FBQztBQUM3QjtBQUVPLE1BQU1MLDZCQUE2QjtJQUN4Q1MsYUFBYUwsT0FBT0MsR0FBRyxDQUFDO0lBQ3hCSyxhQUFhTixPQUFPQyxHQUFHLENBQUM7SUFDeEJNLGVBQWVQLE9BQU9DLEdBQUcsQ0FBQztJQUMxQk8sZUFBZVIsT0FBT0MsR0FBRyxDQUFDO0FBQzVCO0FBRU8sTUFBTUosZ0NBQWdDO0lBQzNDWSxpQkFBaUJULE9BQU9DLEdBQUcsQ0FBQztJQUM1QlMsaUJBQWlCVixPQUFPQyxHQUFHLENBQUM7SUFDNUJVLG1CQUFtQlgsT0FBT0MsR0FBRyxDQUFDO0lBQzlCVyxtQkFBbUJaLE9BQU9DLEdBQUcsQ0FBQztBQUNoQztBQUVPLE1BQU1ILGtDQUFrQztJQUM3Q2UsbUJBQW1CYixPQUFPQyxHQUFHLENBQUM7SUFDOUJhLHFCQUFxQmQsT0FBT0MsR0FBRyxDQUFDO0FBQ2xDIn0=