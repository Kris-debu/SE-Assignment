const util = require('./util');

it("Should add two numbers", () => {
        var res = add(11, 33);
        if(res !== 44)
        throw new Error('Expected 44');
    }
);