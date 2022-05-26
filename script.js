// fetch todos API
const list = document.querySelector(".list-container");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    table(data);
  });

function table(data) {
  list.innerHTML = "";
  for (let value of data) {
    list.innerHTML += `        
                <div class="list-column">
                  <ul class="list-item">
                    <li class="list-header">UserId: ${value.userId}</li>
                    <li>Id: ${value.id}</li>
                    <li>Title: ${value.title}</li>
                    <li>Completed: ${value.completed}</li>
                  </ul>
                </div>
                `;
  }
}
