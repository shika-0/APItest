// Register unsuccessful
// "method" : "POST"
// Body {"email": "sydney@fife"}

pm.test("User registed unsuccessfully", function () {
    pm.response.to.have.status(400);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});