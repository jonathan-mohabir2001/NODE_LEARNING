/*
Create a random class 
*/
class Random {
    constructor() {
        this.random = Math.random();
    }

    getNumber() {
        return this.random;
    }
}


// start an express server 
const express = require('express');
const app = express();
const port = 3000;
