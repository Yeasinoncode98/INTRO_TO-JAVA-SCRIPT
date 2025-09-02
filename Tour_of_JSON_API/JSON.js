const loadData = () => {
  // Promise of response
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    // Promise of json data
    .then((data) => console.log(data));
};

// const result = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(result);

// fetch is a function it tells
// the client to wait for sometime
// to get something but takes some time
// Then it gives the info that needed for the client

// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((response) => response.json()) //Wait here
//     .then((data) => displayPost(data)); //Sharing the Data after taking it
// };

// const displayPost = (posts) => {
//   //   console.log(posts);
//   posts.forEach((post) => {
//     console.log(post);
//   });
// };
