const printName = (callback) => {
  setTimeout(() => {
    console.log("My name is Jacob");
    console.log("(2 second delay)");
    callback();
  }, 2000);
};
const printAge = (callback) => {
  setTimeout(() => {
    console.log("I am 26 years old");
    console.log("(3 second delay)");
    callback();
  }, 3000);
};
const printBirthPlace = (callback) => {
  setTimeout(() => {
    console.log("I was born in Helsingborg");
    console.log("(4 second delay)");
    callback();
  }, 4000);
};
const printHobbies = (callback) => {
  setTimeout(() => {
    console.log("My hobbies are playing video games, watching mma and coding");
    console.log("(5 second delay)");
    callback();
  }, 5000);
};

printName(() => {
  printAge(() => {
    printBirthPlace(() => {
      printHobbies(() => {
        console.log("That's some information about me");
      });
    });
  });
});
