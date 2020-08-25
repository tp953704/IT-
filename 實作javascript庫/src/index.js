import {sayHello} from './module/index.js';


export const sayHelloToSomeOne = (sName)=>{
    return `${sayHello()}  ${sName}`;
};