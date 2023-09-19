fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     result = json.reduce((total, profile, index, array) => {
        if (profile.completed){
            if(total[profile.userId]){
                total[profile.userId] += 1
            }else{
                total[profile.userId] = 1
            }
        }
        return total
     }, {})
     console.log(result)
  })
  .catch(function(err) { 
    console.log(err);
  });