use bookings_hub;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Ahmed McHamed",
        email: "Mchamed@mchamed.com",
        checkedIn: false
    },
    {
        name: "Keith Keitherson",
        email: "Robert@realname.co.uk",
        checkedIn: true
    },
    {
        name: "Yoshi Mario",
        email: "yahooitsame@weehee.org",
        checkedIn: true
    }
]);