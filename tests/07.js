// Delete User
// "method": "DELETE"

pm.test("User is deleted successfully", function () {
    pm.response.to.have.status(204);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});