const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../src/index');

describe('GET api/weather', function () {
    it('Should return object containing key weather', function (done) {
        request(app).get('/api/weather')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
            if(err) return done(err);
            expect(res.body).to.have.property('weather');
            done();
        });
    });
    it('Getting weather with latitude 65.73 and longitude 24.56 should return object contain city of Kemi', function (done) {
        request(app).get('/api/weather?lat=65.73&lon=24.56')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
            if(err) return done(err);
            expect(res.body.name).to.be.equal('Kemi');
            done();
        });
    });
});

describe('GET /api/forecast', function () {
    it('Should return object containing list of forecasts with atleast 5 items', function (done) {
        request(app).get('/api/forecast')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
            if(err) return done(err);
            expect(res.body).to.have.property('list');
            expect(res.body.list).to.have.length.at.least(5);
            done();
        });
    });
    it('Getting forecast with latitude 65.73 and longitude 24.56 should return object contain city of Kemi', function (done) {
        request(app).get('/api/forecast?lat=65.73&lon=24.56')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
            if(err) return done(err);
            expect(res.body.city.name).to.be.equal('Kemi');
            done();
        });
    });
});