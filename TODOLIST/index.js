let toDO = [];
if (localStorage.getItem('TODO') != null) {
    toDO = JSON.parse(localStorage.getItem('TODO'));
}
DisplayItem();

function AddTODo() {
    let inputele = document.querySelector("#todo-title");
    let inputval = inputele.value;
    let dateele = document.querySelector("#todo-date");
    let dateval = dateele.value;
    let x = {
        title: inputval,
        date: dateval
    }
    if (x.title !== '' && x.date !== '') {
        toDO.push(x);
        inputele.value = '';
        dateele.value = '';
        localStorage.setItem("TODO", JSON.stringify(toDO));
    } else {
        if (x.title !== '')
            alert("Enter Valid Date");
        else if (x.date !== '') 
            alert("Enter Valid Title");
        else 
            alert("Enter Valid Date && Valid Title");
    }

    DisplayItem();
}

function DisplayItem() {
    let displayelement = document.querySelector('.todo-container');
    let newhtml = '';
    for (let i = 0; i < toDO.length; i++) {
        newhtml +=
            ` 
           <span class='title'>${toDO[i].title}</span>
             <span class='title'>${toDO[i].date}</span>
             <button class="del-btn" onclick="deleteItem(${i})">Delete</button>    
           `;
    }
    displayelement.innerHTML = newhtml;
}

function deleteItem(index) {
    toDO.splice(index, 1);
    localStorage.setItem("TODO", JSON.stringify(toDO));
    DisplayItem();
}
