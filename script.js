// Create variables for the welcome message
var greeting = 'Welcome, ';
var name = 'everyone!';
var message = 'This site is a collection of all of my favorite movies and games!';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;
