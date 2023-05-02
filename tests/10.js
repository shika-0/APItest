// Login Successful
// "method" : "POST"
// Body {"email": "eve.holt@reqres.in","password": "cityslicka"}

pm.test("User login successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});