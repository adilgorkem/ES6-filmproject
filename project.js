// Main JS File


//1.Selection of film form
const form = document.getElementById("film-form");
//1.1. Selection of inputs in film form
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// 7. Deleting films from UI
// 7.1. Selection of CardBody
const cardbody = document.querySelectorAll(".card-body")[1];

// 9. Delete All Films
// 9.1. Selection of Clear Button

const clear = document.querySelector("#clear-films");


//2.UI Object Initialize: Buna ES6'da gerek kalmadı çünkü biz static fonksiyon şeklinde onları yazdık.
//const ui = new UI();

//3.Loading all events
eventListeners();
function eventListeners(){
    //4. Run addFilm function when film form is submitted
    form.addEventListener("submit",addFilm);

// 6. When DOM Loaded, transfer all films in local storage to UI
document.addEventListener("DOMContentLoaded",function(){
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
})

// 7.2. When card body is clicked, delete All Films
cardbody.addEventListener("click",deleteFilm);

// 9.2. Clear event
clear.addEventListener("click",clearAllFilms);
}

//4. addFilm 
function addFilm(e){ // 4.1. addFilm function definition

//4.2. Setting input values as constant values
const title = titleElement.value;
const director = directorElement.value;
const url = urlElement.value;

//4.3. if title, director or url values are missing give error message
if(title === "" || director === "" || url === ""){
    //Error message
    UI.displayMessages("Lütfen tüm alanları doldurun...","danger");
}

//4.4. Else Condition: Create newFilm
else {
    // 4.4.1. Defining object named newFilm
    const newFilm = new Film(title,director,url);
    // 4.4.2. Adding film to UI
    UI.addFilmToUI(newFilm);
    //5.1. Adding to storage
    Storage.addFilmtoStorage(newFilm);
    //4.4.3. Message after adding completed
    UI.displayMessages(title + " filmi başarıyla eklendi","success");
}

//4.5. Clear inputs after data entry(ui.js 3)
//Local storage'a ekleme silme aktif değilse sayfa yenilendiğinde table'a eklenen veriler de gider.
UI.clearInputs(titleElement,urlElement,directorElement);



    e.preventDefault();
}

// 5. Storage Object
//const storage = new Storage(); Bu da iptal


// 7.3 Delete film function

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);

        // 8. Deleting film from local storage
        console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); // Filmi sil linkinin(a etiketi) parent'ının (td) iki önceki kardeşinin(Film ismi yazan element) text içeriği: Film İsmi
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        //Message after deleting
        UI.displayMessages(e.target.parentElement.previousElementSibling.previousElementSibling.textContent + " filmini silme işlemi başarılı","success");
    }
}

// 9.3. Clear All films Function

function clearAllFilms(){
    if(confirm("Emin misiniz?")){
        const films = document.querySelectorAll("#delete-film");
        const numberoffilms = films.length;
        console.log(numberoffilms);
        UI.clearAllFilmsFromUI();
        UI.displayMessages("Tüm filmler silindi","warning");
        UI.displayMessages("Toplam " + numberoffilms + " adet film silindi.","success");
        Storage.clearAllFilmsFromStorage();
        
    }

}
