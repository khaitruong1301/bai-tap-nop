function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log({ target })
    console.log({ key })
    console.log({ descriptor })

    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`${key} method is called with args: ${args}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

class MyClass {
    @logMethod
    myMethod(a: number, b: number) {
        return a + b;
    }
}

const myClass = new MyClass();
myClass.myMethod(1, 2);


const obj = {
    name: 'My Object',
    sayHello: function () {
        console.log(`Hello from ${this.name}`);
    }
};

const anotherObj = {
    name: 'Another Object'
};

obj.sayHello.apply(anotherObj);