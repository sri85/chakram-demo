const chakram = require('chakram'),
expect = chakram.expect;

const testData = require('../../commons/testParams');


describe("Update users Api Tests", function(){
  it("Verify whether we are able to update an user endpoint",function(){
    return chakram.put(testData.USERS_APIURL+testData.VALID_USER_ID,{
      name:"updateUserTest"
    }).then(function(response){
      return expect(response.body.name).to.contain("updateUserTest");
    });

  });
});
