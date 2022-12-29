const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const newDate = addDays(new Date());
  return `${newDate.getDay() + 100}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;

  response.send(newDate);
});

module.exports = app;
