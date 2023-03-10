"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "coffeeDefined", {
    enumerable: true,
    get: ()=>coffeeDefined
});
const _typeormSeeding = require("typeorm-seeding");
const _coffee = require("../../entities/Coffee");
const coffeeDefined = new _coffee.Coffee();
(0, _typeormSeeding.define)(_coffee.Coffee, ()=>{
    coffeeDefined.CoffeeStatus = 'VERIFIED';
    coffeeDefined.brand = 'Lavacca';
    coffeeDefined.burntLvl = 'LIGHT_ROAST';
    coffeeDefined.createdAt = new Date();
    coffeeDefined.description = 'Lore ipusm do lor';
    coffeeDefined.imgUrl = 'http://dumm-url.png';
    coffeeDefined.name = 'sample coffee name';
    coffeeDefined.reflink = 'http://another-dumb-link.com';
    return coffeeDefined;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9maXh0dXJlcy9mYWN0b3JpZXMvQ29mZmVlRmFjdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmUgfSBmcm9tICd0eXBlb3JtLXNlZWRpbmcnO1xuXG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Db2ZmZWUnO1xuXG5leHBvcnQgY29uc3QgY29mZmVlRGVmaW5lZCA9IG5ldyBDb2ZmZWUoKTtcblxuZGVmaW5lKENvZmZlZSwgKCkgPT4ge1xuICBjb2ZmZWVEZWZpbmVkLkNvZmZlZVN0YXR1cyA9ICdWRVJJRklFRCc7XG4gIGNvZmZlZURlZmluZWQuYnJhbmQgPSAnTGF2YWNjYSc7XG4gIGNvZmZlZURlZmluZWQuYnVybnRMdmwgPSAnTElHSFRfUk9BU1QnO1xuICBjb2ZmZWVEZWZpbmVkLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gIGNvZmZlZURlZmluZWQuZGVzY3JpcHRpb24gPSAnTG9yZSBpcHVzbSBkbyBsb3InO1xuICBjb2ZmZWVEZWZpbmVkLmltZ1VybCA9ICdodHRwOi8vZHVtbS11cmwucG5nJztcbiAgY29mZmVlRGVmaW5lZC5uYW1lID0gJ3NhbXBsZSBjb2ZmZWUgbmFtZSc7XG4gIGNvZmZlZURlZmluZWQucmVmbGluayA9ICdodHRwOi8vYW5vdGhlci1kdW1iLWxpbmsuY29tJztcblxuICByZXR1cm4gY29mZmVlRGVmaW5lZDtcbn0pO1xuIl0sIm5hbWVzIjpbImNvZmZlZURlZmluZWQiLCJDb2ZmZWUiLCJkZWZpbmUiLCJDb2ZmZWVTdGF0dXMiLCJicmFuZCIsImJ1cm50THZsIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwibmFtZSIsInJlZmxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzthQUFBQTs7Z0NBSlU7d0JBRUE7QUFFaEIsTUFBTUEsZ0JBQWdCLElBQUlDLGNBQU07QUFFdkNDLElBQUFBLHNCQUFNLEVBQUNELGNBQU0sRUFBRSxJQUFNO0lBQ25CRCxjQUFjRyxZQUFZLEdBQUc7SUFDN0JILGNBQWNJLEtBQUssR0FBRztJQUN0QkosY0FBY0ssUUFBUSxHQUFHO0lBQ3pCTCxjQUFjTSxTQUFTLEdBQUcsSUFBSUM7SUFDOUJQLGNBQWNRLFdBQVcsR0FBRztJQUM1QlIsY0FBY1MsTUFBTSxHQUFHO0lBQ3ZCVCxjQUFjVSxJQUFJLEdBQUc7SUFDckJWLGNBQWNXLE9BQU8sR0FBRztJQUV4QixPQUFPWDtBQUNUIn0=