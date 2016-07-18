var chai = require('chai');
var request = require('supertest');
var express = require('express');
var expect = chai.expect; 
var romanNumeralAPI = require('./../src/restapi');

var app = romanNumeralAPI.app;

describe('Roman Numeral', function() {
  it('should return the roman numeral equivalent', function(done) {
    request(app)
      .post('/toroman', {'arabic': 1})
      .set('Accept', 'application/json')
      .expect(200, {'roman': 'I'}, done);
  });
});