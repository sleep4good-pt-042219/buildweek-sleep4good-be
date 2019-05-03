const express = require('express');
const server = require('./../../server.js');
const db = require('../../data/dbConfig');
server.use(express.json());
const generateToken = require('./../../auth/generateToken');
const request = require('supertest');

describe('the server', () => {
    beforeEach(() => {
        return db('hotels').truncate()
    })

    describe('GET /hotels', function() {

        it('responds with 200 when fetching hotels', async function() {

            const user = {
                username: 'Jojojoj',
                password: 'adsdadsd',
                role_id: 3
            }

            const token = generateToken(user);
            const res = await request(server)
                .get("/api/hotels")
                .set('Accept', 'application/json')
                .set('Authorization', token);

            expect(res.status).toBe(200);

        });

        it('responds with 401 if token missing', async function() {

            const res = await request(server)
                .get("/api/hotels")
                .set('Accept', 'application/json')
                .set('Authorization', null);

            expect(res.status).toBe(401);

        });

        it('responds with 201 when post', async function() {
            const user = {
                username: 'Jojojoj',
                password: 'adsdadsd',
                role_id: 3
            }
            const hotel = { hotel_name: 'Joe-Schmoe', imageUrl: 'ffcvvgg' }
            const token = generateToken(user);

            const res = await request(server)
                .post("/api/hotels")
                .send(hotel)
                .set('Accept', 'application/json')
                .set('Authorization', token);

            expect(res.status).toBe(201);
            expect(res.body.hotel_name).toBe('Joe-Schmoe')
            expect(res.body.imageUrl).toBe('ffcvvgg')

        });
    });

})