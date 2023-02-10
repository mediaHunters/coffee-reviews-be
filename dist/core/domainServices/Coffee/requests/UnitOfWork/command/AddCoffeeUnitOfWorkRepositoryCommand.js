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

// src/core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand.ts
var AddCoffeeUnitOfWorkRepositoryCommand_exports = {};
__export(AddCoffeeUnitOfWorkRepositoryCommand_exports, {
  CreateCoffeeUnitOfWorkRepositoryCommand: () => CreateCoffeeUnitOfWorkRepositoryCommand
});
module.exports = __toCommonJS(AddCoffeeUnitOfWorkRepositoryCommand_exports);
var CreateCoffeeUnitOfWorkRepositoryCommand = class {
  constructor(brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus) {
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.reflink = reflink;
    this.CoffeeStatus = CoffeeStatus;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateCoffeeUnitOfWorkRepositoryCommand
});
//# sourceMappingURL=AddCoffeeUnitOfWorkRepositoryCommand.js.map