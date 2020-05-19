(function () {
   var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//    var names = prompt("Enter the Name And Open Console ");
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names);
          break;
  } else {
    helloSpeaker.speak(names);
  }
}

})();
