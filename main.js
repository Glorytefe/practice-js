const innerItem = document.getElementById('inner');

fetch('https://api.github.com/users')
.then(response => response.json())
.then(data => {
    let innercont = ""; 
    data.forEach((element, index) => {
   
        if(index === 0){
            innercont += ` <div class="carousel-item active">
            <img class="d-block" src="/img/car1.jpg" alt="First slide">
            <div class="carousel-caption text-center d-md-block">
                <img src="  ${element.avatar_url}" class="rounded-circle  w-25">
                <h5>${element.login}</h5>
              </div>
          </div>`
        } else{
            innercont += ` <div class="carousel-item">
            <img class="d-block" src="/img/car1.jpg" alt="First slide">
            <div class="carousel-caption text-center d-md-block">
             <img src="  ${element.avatar_url}" class="rounded-circle  w-25">
             <h5>${element.login}</h5>
              </div>
          </div>`
        }
        innerItem.innerHTML = innercont
    })
    
});
