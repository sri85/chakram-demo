const chakram = require('chakram'),
expect = chakram.expect;

const testData = require('../../commons/testParams');


describe("Get users API Tests", function(){
  it("Verify whether get users API returns a 200",function(){
    let getUserResponse = chakram.get(testData.USERS_APIURL);
    return expect(getUserResponse).to.have.status(testData.HTTP_OK_CODE);
  });

  it("Verify id user API returns a 404 when we try to get details of a non existent user",function(){
    let getUserResponse = chakram.get(testData.USERS_APIURL+testData.INVALID_USER_ID);
    return expect(getUserResponse).to.have.status(testData.HTTP_NOT_FOUND_CODE);
  });

  it("Verify the json returned by the users endpoint",function(){
    let getUserResponse = chakram.get(testData.USERS_APIURL+testData.VALID_USER_ID);
    return expect(getUserResponse).to.comprise.of.json({
      id:1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    });
  });

  it("Veify the headers of the get user API",function(){
    let getUserResponse = chakram.get(testData.USERS_APIURL);
    expect(getUserResponse).to.have.header('Cache-Control', 'public, max-age=14400');
    // For some reason connection is always set to close instead of keep-alive
    expect(getUserResponse).to.have.header('connection', 'close');
    expect(getUserResponse).to.have.header('Content-Type','application/json; charset=utf-8');
    return chakram.wait();
  });
});
