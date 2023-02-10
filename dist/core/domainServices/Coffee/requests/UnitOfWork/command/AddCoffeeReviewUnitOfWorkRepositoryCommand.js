"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeReviewUnitOfWorkRepositoryCommand.ts
var AddCoffeeReviewUnitOfWorkRepositoryCommand_exports = {};
__export(AddCoffeeReviewUnitOfWorkRepositoryCommand_exports, {
  AddCoffeeReviewUnitOfWorkRepositoryCommand: () => AddCoffeeReviewUnitOfWorkRepositoryCommand
});
module.exports = __toCommonJS(AddCoffeeReviewUnitOfWorkRepositoryCommand_exports);
var AddCoffeeReviewUnitOfWorkRepositoryCommand = class {
  constructor(userId, coffeeId, look, smell, taste) {
    this.userId = userId;
    this.coffeeId = coffeeId;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddCoffeeReviewUnitOfWorkRepositoryCommand
});
//# sourceMappingURL=AddCoffeeReviewUnitOfWorkRepositoryCommand.js.map