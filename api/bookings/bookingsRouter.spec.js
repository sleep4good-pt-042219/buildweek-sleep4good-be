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
            // console.log(user)
            const token = generateToken(user);
            // console.log(token)
            const res = await request(server).get("/api/bookings").set('Accept', 'application/json')
            .set('Authorization', token);
            // console.log(res.body)
            expect(res.status).toBe(200);

            // res.expect('Content-Type', /json/)
            // res.expect(200, done);
        });

        it('responds with 401', async function() {

            const res = await request(server).get("/api/bookings").set('Accept', 'application/json')
            .set('Authorization', null);
            expect(res.status).toBe(401);

        });
    });
    // it('should respond with all bookings in the db', async () => {
    //     await db('bookings').insert([
    //         { 
    //             location_id: 3,
    //             hotel_id: 2,
    //             user_id: 1,
    //             total: 33,
    //             booking_start_date: '2014-12-30 23:18:54',
    //             booking_end_date: '2006-12-30 00:38:54'
    //         },
    //         { 
    //             location_id: 3,
    //             hotel_id: 2,
    //             user_id: 1,
    //             total: 53,
    //             booking_start_date: '2014-12-30 23:18:54',
    //             booking_end_date: '2006-12-30 00:38:54'
    //         }
    //     ])

    //     const res = await request(server).get('/api/bookings');
    //     expect(res.body.length).toBe(2)
    //     expect(res.status).toBe(200);
    //     expect(res.body[0].total).toBe(33)
    //     expect(res.body[1].total).toBe(33)
    //     expect(res.body[0].id).toBe(1)
    //     expect(res.body[1].id).toBe(2)
    //     expect(res.type).toBe('application/json');

    // })
    // })

})