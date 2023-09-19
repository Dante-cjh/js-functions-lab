fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    result = json.reduce((init, item, index, array) => {
        if(!item.completed){
            init.push({'userId': item.userId, 'title': item.title})
        }
        return init
    }, [])
    console.log(result)
  })
  .catch(function(err) { 
    console.log(err);
  });