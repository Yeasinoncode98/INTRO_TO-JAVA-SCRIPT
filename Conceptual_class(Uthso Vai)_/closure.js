function deductLifeCounter(studentName) {
  let life = 3;
  //inner function
  return () => {
    if (life > 0) {
      life--;

      console.log(`${studentName},you lost a life.Life remaining : ${life}`);
    } else {
      console.log(`${studentName},Your life is over! No life left`);
    }
  };
}

const rahim = deductLifeCounter("Rahim");
const karim = deductLifeCounter("karim");
const rashed = deductLifeCounter("rashed");

rahim();
rahim();
rahim();
rahim();

console.log("....................................");
karim();
karim();

console.log("....................................");

rashed();
karim();
karim();
