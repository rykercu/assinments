fetch(`/person/${3}`).then(function(response){
    return response.json()
})

.then(function(data){
    const person = document.getElementById("person");
    person.innerHTML = data.intelligence;
});