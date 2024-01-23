var startMyDay = function () {
  return "Time for coffee and a shower";
};

//console.log(startMyDay);

console.log(startMyDay());

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("chocolatechip"));

var introduce = function (name, occupation) {
  return `Hello my name is ${name} and I work as a ${occupation}.`;
};

console.log(introduce("Timmy", "candyman"));

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you drink today?")
  );
  if (numGlasses >= 8) {
    console.log("Congratulations, thats a good amount of water!");
  } else {
    console.log("Hmm not bad.. Let's try to drink more tommorow!");
  }
};

hydrationFeedback();
