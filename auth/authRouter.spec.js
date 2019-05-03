const express = require('express');
const server = require('./../server.js');
const db = require('../data/dbConfig');
const bcrypt = require('bcryptjs');
server.use(express.json());
// const generateToken = require('./../../auth/generateToken');
const request = require('supertest');

describe('the server', () => {
    beforeEach(() => {
        return db('users').truncate()
    })

    describe('post /auth/partner/register', function() {

        it('responds with 201 when registering a new user', async function() {

            const user = {
                username: 'Jojojoj',
                password: 'adsdadsd',
            }
            const hash = bcrypt.hashSync(user.password, 10);
            user.password = hash;

            const res = await request(server)
                .post("/auth/partner/register")
                .send(user)
                .set('Accept', 'application/json')

            expect(res.status).toBe(201);
            expect(res.body.username).toBe('Jojojoj')
            expect(res.body.role_id).toBe(2)
        });

        
    });

    describe('post /auth/patron/register', function() {

        it('responds with 201 when registering a new user', async function() {

            const user = {
                username: 'patron',
                password: 'adsdadsd',
                role_id: 1
            }
            const hash = bcrypt.hashSync(user.password, 10);
            user.password = hash;

            const res = await request(server)
                .post("/auth/patron/register")
                .send(user)
                .set('Accept', 'application/json')

            expect(res.status).toBe(201);
            expect(res.body.username).toBe('patron')
            expect(res.body.role_id).toBe(3)
        });

    });

    // describe('post /auth/login', async function() {

    //     it('responds with 200 when user logs in', async function() {
    //         const newUser = {
    //             username: 'patron',
    //             password: 'patronpass',
    //             role_id: 1
    //         }
    //         const hash = bcrypt.hashSync(newUser.password, 10);
    //         newUser.password = hash;
    //         const insert = await db('users').insert(user, 'id')
    //         .then(ids => {
    //           return getById(ids[0]);
    //         });
    //         // const user = await db('users').where({id: id}).first();
    //         console.log(insert)
    //         // console.log(user)


    //         const res = await request(server)
    //             .post("/auth/login")
    //             .send(insert)
    //             .set('Accept', 'application/json')

    //         expect(res.status).toBe(200);
    //         expect(res.body.username).toBe('patron')
    //         // expect(res.body.password).toBe(hash)
    //     });
        
    // });

})