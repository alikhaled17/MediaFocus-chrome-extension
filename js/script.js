document.getElementById("addNewItem").addEventListener("click", addNewLink);

function addNewLink() {
    let imageLink = document.getElementById("imageLink").value;
    let socialLink = document.getElementById("socialLink").value;
    document.getElementById("newSocialContainer").innerHTML += `<span>
    <a href="${socialLink}" target="_blank">
        <img class="newImage" src="${imageLink}" alt="">

    </a>
</span>`

    imageLink = ''
    socialLink = ''

}