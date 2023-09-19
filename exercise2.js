fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    todoTitles = json.map( todo => {
      return todo.title
    })
    console.log(todoTitles)
  })
  .catch(function(err) { 
    console.log(err);
  });