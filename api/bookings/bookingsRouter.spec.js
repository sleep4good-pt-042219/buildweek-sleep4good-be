const express = require('express');
const server = require('./../../server.js');
const db = require('../../data/dbConfig');
server.use(express.json());
const generateToken = require('./../../auth/generateToken');
const request = require('supertest');

describe('the server', () => {
    beforeEach(() => {
        return db('bookings').truncate()
    })

    describe('the environment', () => {
        it('should set setting for the environment', () => {
            const env = process.env.DB_ENV
    
            expect(env).toBe('testing')
        })
    })

    describe('GET /bookings', function() {

        it('responds with 200', async function() {

            const user = {
                username: 'Jojojoj',
                password: 'adsdadsd',
                role_id: 3
            }

            const token = generateToken(user);
            const res = await request(server)
                .get("/api/bookings")
                .set('Accept', 'application/json')
                .set('Authorization', token);

            expect(res.status).toBe(200);

        });

        it('responds with 401', async function() {

            const res = await request(server)
                .get("/api/bookings")
                .set('Accept', 'application/json')
                .set('Authorization', null);

            expect(res.status).toBe(401);

        });

        it('responds with 201', async function() {
            const user = {
                username: 'Jojojoj',
                password: 'adsdadsd',
                role_id: 3
            }
            const booking = { 
                location_id: 3,
                hotel_id: 2,
                user_id: 1,
                total: 33,
                booking_start_date: '2014-12-30 23:18:54',
                booking_end_date: '2006-12-30 00:38:54'
            }
            const token = generateToken(user);

            const res = await request(server)
                .post("/api/bookings")
                .send(booking)
                .set('Accept', 'application/json')
                .set('Authorization', token);

            expect(res.status).toBe(201);
            expect(res.body.booking.location_id).toBe(3)
            expect(res.body.booking.total).toBe(33)
            expect(res.body.booking.booking_end_date).toBe('2006-12-30 00:38:54')


        });
    });

})