var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users/", true);
xhr.onload = function () {
  display(JSON.parse(xhr.responseText).data);
};
xhr.send();

function display(data) {
  data.forEach(({ avatar, first_name, last_name, email }) => {
    document.querySelector("#root").innerHTML += `
        
         <div class='col-3'>
        <img src="${avatar}" alt="">
        <h1 class="name">${first_name} ${last_name}</h1>
        <a class="email" href="mailto:${email}">${email}</a>
      </div>
        `;
  });
}
