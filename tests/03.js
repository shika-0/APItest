// List a not found user
// "method": "GET"

pm.test("User not found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});