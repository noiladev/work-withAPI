let elList = document.querySelector('.list')

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((malumot) => addCards(malumot))



function addCards(malumot) {
    elList.innerHTML = ''
    malumot.forEach((item) => {
      let newLi = document.createElement('li')
      newLi.innerHTML = ` <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title"><mark>Id: ${item.id}</mark></h3>
        <h4 class="card-title">Name: ${item.name}</h4>
        <i class="italic__alph">Username: ${item.username}</i>
        <i class="italic__alph">Email: ${item.email}</i> <br>
        <p class="card-text">Adress: street: ${item.address.street}</p>
        <b class="tag__b" >Phone: ${item.phone}</b> <br>
        <b class="tag__b" >Website: ${item.website}</b> <br>
        <b class="tag__b" >Company name: ${item.company.name}</b>
        </div>
    </div>`
    console.log(newLi);
    elList.appendChild(newLi)
  });
}