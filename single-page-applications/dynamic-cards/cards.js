document.getElementById("addIcon").addEventListener("mouseover", (e)=> {
    document.getElementById("instructions").classList.toggle("hidden");
    e.stopPropagation();
  })

document.getElementById("addIcon").addEventListener("mouseleave", (e)=> {
    document.getElementById("instructions").classList.toggle("hidden");
    e.stopPropagation();
  })

document.getElementById("addIcon").addEventListener("click", (e)=> {
    // document.getElementById("todoItem").classList.toggle("hidden");
    // document.getElementById("addButton").classList.toggle("hidden");
    console.log(e)
    document.getElementById("createItem").innerHTML =
    `<span id="removeSpan">
    <input type="text" name="todo"id="todoItem">
     <button id="addButton"> Add </button>
     <span>`
     e.stopPropagation();

    document.getElementById("addButton").addEventListener("click", (e)=> {
      var todoList = document.getElementById("todoItems");
      todoList.innerHTML +=
      `<div class="addedItem">
        <input type="checkbox" name = "checkForComplete" class="done">
        <span> ${document.getElementById("todoItem").value} </span>
        <button class="edit"> Edit </button>
        <button class="delete"> Delete </button>
        </div>`
       document.getElementById("removeSpan").remove();
      var deleteButtons = document.getElementsByClassName("delete");
      var addedItems = document.getElementsByClassName("addedItem");
        console.log(deleteButtons)
        for (i=0; i<deleteButtons.length; i++) {
          deleteButtons[i].addEventListener("click", (e)=> {
            e.target.parentNode.remove()
          });
        }
      })
});


