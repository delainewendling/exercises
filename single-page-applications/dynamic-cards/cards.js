document.getElementById("addIcon").addEventListener("mouseover", (e)=> {
    document.getElementById("instructions").classList.toggle("hidden");
    e.stopPropagation();
  })

document.getElementById("addIcon").addEventListener("mouseleave", (e)=> {
    document.getElementById("instructions").classList.toggle("hidden");
    e.stopPropagation();
  })

document.getElementById("addIcon").addEventListener("click", (e)=> {
    console.log(e)
    document.getElementById("createItem").innerHTML =
    `<span id="removeSpan">
    <input type="text" name="todo"id="todoItem">
     <button id="addButton"> Add </button>
     <span>`

document.getElementById("addButton").addEventListener("click", (e)=> {
    var todoList = document.getElementById("todoItems");
    todoList.innerHTML +=
    `<div class="addedItem">
      <input type="checkbox" name="checkForComplete" class="done">
      <span class="item"> ${document.getElementById("todoItem").value} </span>
      <button class="delete"> Delete </button>
      </div>`
    document.getElementById("removeSpan").remove();
    var deleteButtons = document.getElementsByClassName("delete");
    var addedItems = document.getElementsByClassName("addedItem");
      for (i=0; i<deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", (e)=> {
          e.target.parentNode.remove()
        });
    }
    var edit = document.getElementsByClassName("item");
      for(i=0; i<edit.length; i++) {
          edit[i].addEventListener('dblclick', (e)=> {
          console.log(e)
          var mySpan = e.target;
          var newSpan = document.createElement("span");
          newSpan.innerHTML = `<textarea class="editText"> ${e.target.innerHTML} </textarea>` ;
          e.target.parentNode.replaceChild(newSpan, mySpan);
      })
    var editText = document.getElementsByClassName("editText");
      for(i=0; i<editText.length; i++) {
          editText[i].addEventListener('keypress', (e)=> {
          var key = e.which || e.keyCode;
            if (key === 13) {
              var mySpan = e.target;
              var newSpan = document.createElement("span");
              newSpan.innerHTML = `<span class="item"> ${e.target.innerHTML} </span>` ;
              e.target.parentNode.replaceChild(newSpan, mySpan);
          }
          document.body.addEventListener('mousedown', (e)=> {
              var mySpan = e.target;
              var newSpan = document.createElement("span");
              newSpan.innerHTML = `<span class="item"> ${e.target.innerHTML} </span>` ;
              e.target.parentNode.replaceChild(newSpan, mySpan);
          }
        })
      }
    e.stopPropagation();
    }
    // var checkboxes = document.getElementsByClassName("done");
    //   console.log(checkboxes)
    //     for(i=0; i<checkboxes.length; i++) {
    //       checkboxes[i].addEventListener('select', (e)=> {
    //         console.log(e)
    //       if (checkboxes[i].checked) {
    //           e.target.nextSibling.classList.toggle("slash");
    //         }
    //   })
    // }
  })
});















