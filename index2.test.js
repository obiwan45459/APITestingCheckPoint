//const index = require('../index.js')
const request = require('supertest')
const express = require('express')

const app = express()

request = request('https://jsonplaceholder.typicode.com')

describe('GET /posts/1/comments', () => {
  it('should get the comments', () => {
    request(app)
    .get('/posts/1/comments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
    
});
    
    //const FileReader = require ('../FileReader.js');
    //const FileReaderTest = new FileReader;
    // const mockReadMethod = jest.fn(filename => {
    //   let returnStr = 'Country,City,AccentCity,Region,Population,Latitude,Longitude';
    //   returnStr += '\r\nad,andorra la vella,Andorra la Vella,07,20430,42.5,1.5166667';
    //   returnStr += '\r\nad,aixas,Aix�s,06,1,42.4833333,1.4666667';
    //   return returnStr;
   // });
  //  const mockFileReader = {readFile: mockReadMethod}


   // const indexTest = new index(FileReaderTest);
    //const indexTest = new index(mockFileReader);
    //your test goes here
    //console.log(indexTest.count("data/worldcitiespop2.csv"));
  //  expect(indexTest.count("data/worldcitiespop.csv")).toEqual('The population of the world is: 1,347,982,728');
    //expect(indexTest.count("data/worldcitiespop2.csv")).toEqual('The population of the world is: 20,433');
  })

  describe('GET /albums/1/photos', () => {
    it('should get the comments', () => {
      request(app)
      .get('/posts/1/photos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
      
  });


});