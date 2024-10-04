const itemInput = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

itemInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && this.value.trim()) {
        addToDo(this.value.trim());
        this.value = "";
    }
});

const addToDo = (itemText) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span class="item-text">${itemText}</span>
        <button class="edit fas fa-edit"></button>
        <button class="remove fas fa-times"></button>
    `;

    listItem.querySelector(".item-text").addEventListener("click", function() {
        this.classList.toggle("done");
    });

  
    listItem.querySelector(".edit").addEventListener("click", function() {
        itemInput.value = listItem.querySelector(".item-text").textContent;
        itemInput.focus();
        editMode= true;
        currentItem = listItem;
        currentItem = listItem;
        
    });

    listItem.querySelector(".remove").addEventListener("click", function() {
        listItem.remove();
    });

    toDoBox.appendChild(listItem);
};