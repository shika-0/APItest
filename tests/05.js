// Edit User
// "method": "PUT"
// Body {	"name" : "Ahmed", "email" : "Ahmed@yahoo.com"}

pm.test("User is edited successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});