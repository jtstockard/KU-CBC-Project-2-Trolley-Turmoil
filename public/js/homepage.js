console.log("Test")

fetch("/api/questions")
  .then(response => response.json())
  .then(data => console.log(data));

  