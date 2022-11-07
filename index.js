// Add your code here
function submitData (userName, email) {
    let formData = {
        name: `${userName}`,
        email: `${email}`,
    }
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
    fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        return object.id;
        //return fetch("http://localhost:3000/users/object/id")
      })
      .catch(function (error) {
        alert("Request failed");
        console.log(error.message);
      });
    
}


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),


// fetch("http://localhost:3000/dogs", configurationObject)
//    .then(function (response) {
//     return response.json();
//     })
//    .then(function (object) {
//     console.log(object);
//     })
