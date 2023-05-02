// List of users
// "method": "GET"


pm.test("Users are listed successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

var usersData = pm.response.json();


pm.test("Verify Page Data", function () {
    pm.expect(usersData.page).to.eql(2);
    pm.expect(usersData.per_page).to.eql(6);
    pm.expect(usersData.data[0].id).to.eql(7);
});
