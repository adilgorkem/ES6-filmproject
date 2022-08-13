// Local Storage

//1. Creating Storage Object

class Storage{
    // 2. addFilmStorage function
static addFilmtoStorage(newFilm) {
    // 2.5. Function for getting array from storage
    let films = this.getFilmsFromStorage();
    // 2.6. pushing newFilm to array
    films.push(newFilm); // It differs from To-do list project as the values in the array are Object instead of strings {title:"aadffda",director:"fdfsfs",url:"nkddnalkfs"}

    //2.7. Adding films again to local storage
    localStorage.setItem("films",JSON.stringify(films));
}
//2.1. Function for getting films from storage (for repeated process)
static getFilmsFromStorage() {
    let films;
    // 2.2. If the values corresponding to films key are null array will be empty
    if (localStorage.getItem("films") === null) {
        films = [];
    }
    // 2.3. If not
    else {
        // 2.4. Getting Films from local storage as array with JSON.parse
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

//3. Deleting film from storage
static deleteFilmFromStorage(filmTitle){
    let films = this.getFilmsFromStorage(); //3.1. Getting film from storage
    films.forEach(function(film,index){
if(film.title === filmTitle){ // 3.2. Checking whether if the deleted film is present in local storage
    //Splice
    films.splice(index,1); // If there is a match delete film
}
    })

    localStorage.setItem("films",JSON.stringify(films)); // Storage update
}

// 4. Deleting all films from storage

static clearAllFilmsFromStorage(){
    localStorage.removeItem("films");
}
}
