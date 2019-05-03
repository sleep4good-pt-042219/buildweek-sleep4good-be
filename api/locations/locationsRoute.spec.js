const express = require('express');
const server = require('./../../server.js');
const db = require('../../data/dbConfig');
server.use(express.json());
const generateToken = require('./../../auth/generateToken');
const request = require('supertest');

describe('the server', () => {
    beforeEach(() => {
        return db('locations').truncate()
    })

    describe('GET /locations', function() {

        it('responds with 200 when fetching locations', async function() {

            const user = {
                username: 'Jojojoj',
                password: 'adsdadsd',
                role_id: 3
            }

            const token = generateToken(user);
            const res = await request(server)
                .get("/api/locations")
                .set('Accept', 'application/json')
                .set('Authorization', token);

            expect(res.status).toBe(200);

        });

        it('responds with 401 if token missing', async function() {

            const res = await request(server)
                .get("/api/locations")
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
            const location = { 
                location_name: 'Holiday Binn of Georgetown',
                hotel_id: 2,
                rooms: 23,
                imageUrl: '',
                street_address: '567 City Street',
                city: 'Georgetown',
                state: 'GA',
                zip: 11443,
                phone: '(717) 443-5511',
                email: 'info@hotelbinn.com',
                rating: 4,
                donation_id: 1
            }
            const token = generateToken(user);

            const res = await request(server)
                .post("/api/locations")
                .send(location)
                .set('Accept', 'application/json')
                .set('Authorization', token);

            expect(res.status).toBe(201);
            expect(res.body.location.location_name).toBe('Holiday Binn of Georgetown')

        });
    });

})