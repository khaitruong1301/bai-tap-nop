var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, key, descriptor) {
    console.log({ target: target });
    console.log({ key: key });
    console.log({ descriptor: descriptor });
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("".concat(key, " method is called with args: ").concat(args));
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function (a, b) {
        return a + b;
    };
    __decorate([
        logMethod
    ], MyClass.prototype, "myMethod", null);
    return MyClass;
}());
var myClass = new MyClass();
myClass.myMethod(1, 2);
var obj = {
    name: 'My Object',
    sayHello: function () {
        console.log("Hello from ".concat(this.name));
    }
};
var anotherObj = {
    name: 'Another Object'
};
obj.sayHello.apply(anotherObj);
