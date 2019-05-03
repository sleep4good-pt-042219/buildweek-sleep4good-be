const express = require('express');
const server = require('./../../server.js');
const db = require('../../data/dbConfig');
server.use(express.json());
const generateToken = require('./../../auth/generateToken');
const request = require('supertest');

describe('the server', () => {
    beforeEach(() => {
        return db('users').truncate()
    })

    describe('get /users', function() {

        it('responds with 201pa when fetching users', async function() {

            const user = {
                username: 'Jojojoj',
                password: 'adsdadsd',
                role_id: 1
            }

            const token = generateToken(user);
            const res = await request(server)
                .get("/api/users")
                .set('Accept', 'application/json')
                .set('Authorization', token);

            expect(res.status).toBe(200);
            expect(res.body).toEqual([])
        });  
    });
})