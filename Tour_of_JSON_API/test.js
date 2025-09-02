const data = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  console.log("Hello");
  const json = await response.json();
  console.log(json);
  console.log(true);
};

data();
