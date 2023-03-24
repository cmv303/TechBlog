//dependencies
const handlebars = require("handlebars");

// timestamp helper function
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
};

// Register the helper function
handlebars.registerHelper("formatDate", formatDate);
