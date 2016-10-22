(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var index in names) {
    var firstLetter = names[index].substr(0, 1);

    if (firstLetter === 'J' || firstLetter === 'j') {
      byeSpeaker.speak(names[index]);
    } else {
      helloSpeaker.speak(names[index]);
    }
  }
})();
