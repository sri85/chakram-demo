const chakram = require('chakram'),
expect = chakram.expect;

const testData = require('../../commons/testParams');


describe("Delete users Api Tests", function(){
  it("Verify whether delete API returns 404 on deleting a  user",function(){
    let deleteUserResponse = chakram.delete(testData.USERS_APIURL+testData.VALID_USER_ID);
    return expect(deleteUserResponse).to.have.status(testData.HTTP_OK_CODE);
  })
});
