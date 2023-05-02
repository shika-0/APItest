// List a single user
// "method": "GET"

pm.test("User is listed successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
pm.test("Correct user ID", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.eql(2);
});