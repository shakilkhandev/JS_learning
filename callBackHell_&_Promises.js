console.log("Planning the flight");

function bookFlight(location, callback) {
  console.log("flight booked on ", location);

  callback();
}

const bookHotel = (hotelname, callback) => {
  console.log("Hotel Booked,Name : ", hotelname);
  callback();
};

const bookTaxi = (taxiNo) => {
  console.log("booked Taxi no", taxiNo);
};



bookFlight("paris", () => {
  bookHotel("toptier", () => {
    bookTaxi("c2321");
  });
});
