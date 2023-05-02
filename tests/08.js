// Register successful
// "method": "POST"
// Body {"email": "eve.holt@reqres.in","password": "pistol"}

pm.test("User registed successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
