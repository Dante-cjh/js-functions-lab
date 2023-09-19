fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    uncompleted = json.filter( item => item.completed == false)
    .map(item => ({userId: item.userId, title: item.title}))
    console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });