const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPost(data));
};

const displayPost = (posts) => {
  // 1.get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    //2.create element
    const postCard = document.createElement("div");
    postCard.innerHTML = ` <div class="post-card">
        <h2>${post.title}</h2>
            <p>
            ${post.body}
            </p>
        </div>`;

    // 3.Add to the container
    postContainer.appendChild(postCard);
  });
};

// ..............................................................

// loadPost();

// {
//     "userId": 10,
//     "id": 97,
//     "title": "quas fugiat ut perspiciatis vero provident",
//     "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
// }

// ...................................

//Array of objects
// const displayPost = (posts) => {
//   //1.get the container
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML = "";
//   //   console.log(postContainer);

//   //2.create element

//   posts.forEach((post) => {
//     console.log(post.title);

//     //2.Create HTML element
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     console.log(li);

//     //3.add  li to container
//     postContainer.appendChild(li);
//   });
// };

//   console.log(posts)
//using normal loop
//   for (let i = 0; i < posts.length; i++) {
//     console.log(posts[i]);
//   }

// Array

//   for (let post of posts) {
//     console.log(post);
//   }

//....................................................
