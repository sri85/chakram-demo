const chakram = require('chakram'),
expect = chakram.expect;

const testData = require('../../commons/testParams');


describe("Create Users Api Tests", function(){
  it("Verify whether create API returns 200 on creating user",function(){
    let createUserResponse = chakram.post(testData.USERS_APIURL,{
      name:"createUserTest"
    });
    return expect(createUserResponse).to.have.status(testData.HTTP_CREATED_CODE);
  })
});
