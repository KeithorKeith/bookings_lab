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
        name: "Mario Mario",
        email: "itsame@yahoo.org",
        checkedIn: true
    }
]);