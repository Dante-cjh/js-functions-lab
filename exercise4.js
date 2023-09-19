fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     result = json.reduce((total, profile, index, array) => {
        return profile.completed ? total+1 : total
     }, 0)
     console.log(result)
  })
  .catch(function(err) { 
    console.log(err);
  });