function showAddNewLink() {
    let addNodes = document.getElementsByClassName('addSocial');
    for (let i = 0; i < addNodes.length; i += 1) {
        addNodes[i].style.display = 'block';
    }

}

function addNewLink() {
    let imageLink = document.getElementById("imageLink").value;
    let socialLink = document.getElementById("socialLink").value;
    document.getElementById("newSocialContainer").innerHTML += `<div class="flex">
    <a href="https://github.com/" target="_blank">
        <img class="newImage" src="https://www12.0zz0.com/2021/05/26/21/702597806.png" alt="">

    </a>
</div>`
}