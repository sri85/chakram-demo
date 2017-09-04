const chakram = require('chakram'),
expect = chakram.expect;

const testData = require('../../commons/testParams');


describe("Create Users Api Tests", function(){
  it("Verify whether create API returns 200 on creating user",function(){
    let getPostsResponse = chakram.get(testData.POSTS_APIURL+testData.VALID_USER_ID)
    return expect(getPostsResponse).to.comprise.of.json({
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
  })
});
