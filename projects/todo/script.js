const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".list");
const deleteBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
    let userData = inputBox.value; //ucerin laittama value
    if (userData.trim() != 0) { // jos ei oo pelkästää spacei
        addBtn.classList.add("active"); //aktivoi add buttonin

    } else {
        addBtn.classList.remove("active");
    }
}

//jos uceri klikkaa add buttonii
addBtn.onclick = () => {
    let userData = inputBox.value; //ucerin laittama value
    let getLocalStorage = localStorage.getItem("New Todo") //otetaan localstorage
    if (getLocalStorage == null) {
        listArr = []; //blöank array
    } else {
        listArr = JSON.parse(getLocalStorage) //transformataan json stringi javascript objektiks
    }
    listArr.push(userData); //listään ucerin data
    localStorage.setItem("New Todo", JSON.stringify(listArr)) //transformataan javascript objekti json stringiks
    showTasks(); //käynnistetään showTasks funktioni
    addBtn.classList.remove("active");
}

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo") //otetaan localstorage
    if (getLocalStorage == null) {
        listArr = []; //blöank array
    } else {
        listArr = JSON.parse(getLocalStorage) //transformataan json stringi javascript objektiks
    }
    let tasks = document.querySelector(".tasks")
    let number_count = '';
    if (listArr.length > 0) {
        deleteBtn.classList.add("active")
    } else {
        deleteBtn.classList.remove("active")
    }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash-alt"></i></span></li>`;
        number_count = index + 1;
    });
    todoList.innerHTML = newLiTag; //lisätään uus li tag ul tagiin
    if (listArr.length > 0) {
        tasks.innerHTML = "You have " + number_count + " tasks left";
    } else {
        tasks.innerHTML = "You don't have any tasks left"
    }
    inputBox.value = ''; //resettaa inputBoxi kun value lisätään
}

//delete task function
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo")
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr)) //transformataan javascript objekti json stringiks
    showTasks();
}
deleteBtn.onclick = () => {
    listArr = []; //clearataan listArray
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks();
};