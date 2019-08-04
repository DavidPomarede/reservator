// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on room-data, waitinglist, etc.
// ===============================================================================

var roomData = require("../data/roomData");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the room)
  // ---------------------------------------------------------------------------

  app.get("/api/rooms", function(req, res) {
    res.json(roomData);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the roomData array)
  // ---------------------------------------------------------------------------

  app.post("/api/rooms", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a room or not.
    // It will do this by sending out the value "true" have a room
    // req.body is available since we're using the body parsing middleware

      roomData.push(req.body);
      res.json(true);

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the room while working with the functionality.
  // Don"t worry about it!
// Displays a single character, or returns false
app.get("/api/rooms/:name", function(req, res) {
  var chosen = req.params.name;

  // console.log(chosen);

  for (var i = 0; i < roomData.length; i++) {
    // console.log(roomData[i].customerName.toLowerCase());
    console.log(res.json(roomData));
    if (chosen === roomData[i].customerName) {
      // console.log(res.json(roomData[i].customerName));
      // console.log(res.json(roomData[i].customerName))
      return res.json(roomData[i]);
    // } else {
    //   // console.log("done")
    }
  }

  return res.json(false);
});

//******************************* */


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    roomData.length = 0;


    res.json({ ok: true });
  });
};
