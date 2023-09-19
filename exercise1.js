fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter(function(item){
        return item.completed == true
     }) // Complete this code
     console.log(completed)
     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });