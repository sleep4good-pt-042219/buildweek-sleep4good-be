const express = require('express');
const server = require('./bookingsRouter.js');
const db = require('../../data/dbConfig');
server.use(express.json());

const request = require('supertest');

describe('the server', () => {
    beforeEach(() => {
        return db('users').truncate()
    })

    describe('the environment', () => {
        it('should set setting for the environment', () => {
            const env = process.env.DB_ENV
    
            expect(env).toBe('testing')
        })
    })

})