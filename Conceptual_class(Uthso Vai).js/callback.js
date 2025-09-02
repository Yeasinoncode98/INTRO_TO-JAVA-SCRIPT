const greet = (name, greetingMsg, cb) => {
  console.log(`Hi, ${name}`);
  cb(greetingMsg);
};


const sayGreetings = (greetMessege) => {
  console.log(greetMessege);
};

// greet("Yeasin", sayGreetings("Good Night"));
greet("Yeasin", "Good-Morning", sayGreetings);
