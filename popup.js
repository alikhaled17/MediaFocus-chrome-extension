// #TODO add more icons to localstorage


var iconsContainer = document.getElementById("socialContainer");

if(!(localStorage.getItem('Websites'))) {
    localStorage.setItem("Websites", '[]');
    showIcons(iconsContainer);
    iconsContainer.innerHTML = '<h5>No media icons exist ..Check sittings!</h5>';
} else {
    if((getData()).length == 0) {
        iconsContainer.innerHTML = '<h5>No media icons exist ..Check sittings!</h5>';
    } else {
        showIcons(iconsContainer);
    }
}

document.getElementById('submit').addEventListener('click', function() {
    let linkLabel = document.getElementById("link-label").value;
    let socialLink = document.getElementById("social-link").value;
    let favcolor = document.getElementById("favcolor").value;

    setData(linkLabel, socialLink, favcolor)
    showIcons(iconsContainer);
    imageLink = ''
    socialLink = ''
    document.getElementById('addNew').style.display = 'none';
    document.getElementById('Sittings').style.display = 'block';

})

var exits = document.querySelectorAll(".exit");
for (let i = 0; i < exits.length; i++) {
    const ex = exits[i];
    ex.addEventListener("click", function(e) {
        e.preventDefault();
        let title = this.getAttribute("data-name");
        delItem(title);
    })
}

function getData() {
    let data = JSON.parse(localStorage.getItem("Websites"));
    return data
}

function setData(title, link, favcolor) {
    if(!(localStorage.getItem('Websites'))) {
        localStorage.setItem("Websites", '[]');
    }
    let data = getData();
    data.push({"title":title, "link":link, "favcolor": favcolor});
    localStorage.setItem("Websites", JSON.stringify(data));
}

function delItem(title) {
    let data = getData();
    for (let i = 0; i < data.length; i++) {
        if(data[i].title.toLowerCase() == title.toLowerCase()) {
            data.splice(i, 1)
        }
    }

    localStorage.setItem("Websites", JSON.stringify(data));
    showIcons(iconsContainer);
}

function showIcons(mainDiv) {
    mainDiv.innerHTML = '';
    let data = getData();
    for (let i = 0; i < data.length; i++) {
        let el = data[i];
        var elDiv = document.createElement('div');
        elDiv.classList.add("flex-i");
        elDiv.innerHTML = 
        `<a href="${el.link}" style="background-color: ${el.favcolor};" target="_blank" class="btn btn-primary" target="_blank">
            ${el.title.toLowerCase()} 
            <span class="exit badge badge-light" data-name="${el.title}">x</span>
        </a>`;
        mainDiv.appendChild(elDiv);
    }
}

document.getElementById('Sittings').addEventListener("click", function() {
    document.getElementById('addNew').style.display = 'block';
    this.style.display = 'none'
})