fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch("")
  .then((res) => res.json())
  .then((data) => {
    fetch("data1.url")
      .then((res) => res.json())
      .then((data) => {
        fetch("")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
