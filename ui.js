// UI Process

//1. Static method
class UI {
    //2. addFilmToUI function (project.js 4.4.2)
static addFilmToUI(newFilm) {
    //2.1. Table(tbody) Selection
    const filmList = document.querySelector("#films");
    // 2.2. Adding film to Film List(Table) innerHtml(+= operator)
    filmList.innerHTML += `
<tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>
`
};

// 3. Deleting Input values (This function will be called in project.js)
static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

// 4. Error Message
static displayMessages (message, type) {
    const cardBody = document.querySelectorAll(".card-body")[0]; // 4.1. First cardbody is selected

    // 4.2. Alert div
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    // 4.3. Appending div to cardbody as a new child
    cardBody.appendChild(div);

    // 4.4. Setting time of div display on screen
    setTimeout(function () {
        div.remove();
    }, 1000)
} // Div disappears after 1 sec.

//5. Trnsferring films from storage to ui when Dom Loaded
static loadAllFilms(films) {
    const filmList = document.getElementById("films");
    films.forEach(function (film) {
        filmList.innerHTML += `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
`
    })
}

// 6. Deleting film from UI
static deleteFilmFromUI(element){
    element.parentElement.parentElement.remove();
}

// 7. Deleting All Films

static clearAllFilmsFromUI(){
    const filmList = document.getElementById("films");
    // While the first element child of filmlist is not null deleting process keeps running
    while(filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove();
    }
}
}

