const express = require('express');
const server = require('./server.js');
const db = require('../../data/dbConfig');
server.use(express.json());

const request = require('supertest');