// Edit User
// "method": "PATCH"
// Body {"name" : "Tarek","Email" : "123"}

pm.test("User is patched successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});