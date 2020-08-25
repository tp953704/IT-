import {sayHello} from '../src/module/index.js';

test('sayHello', () => {
    expect(sayHello()).toBe("hello")
})
