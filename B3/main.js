
let mapAPI = new Map();
mapAPI.set('posts','https://jsonplaceholder.typicode.com/posts');
mapAPI.set('albums','https://jsonplaceholder.typicode.com/albums');
mapAPI.set('photos','https://jsonplaceholder.typicode.com/photos');
// tab default: Posts
let tabcontent1 = document.querySelectorAll('.tabcontent');
tabcontent1[0].style.display = "block";
let h2Title = document.querySelector('h2').innerText = "Type: Posts"
renderData('posts');


function openAPI(evt, id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    // set type: 
    let h2 = document.querySelector('h2');
    h2.innerText = "";
    h2.innerText = `Type: ${id}`;
    evt.currentTarget.className += " active";
    // renderData from API
    renderData(id);
  }
  // function render 
  async function renderData(id){
    let resource = await axios.get(mapAPI.get(id));
    let ul = document.querySelector(`#${id} .content` );
    // reset inner text
    ul.innerText = '';
    // render to ul
    for (let index = 0; index < 10; index++) {
        ul.innerHTML +=`
            <li>${resource.data[index].title}</li>
        `
    }
  }
