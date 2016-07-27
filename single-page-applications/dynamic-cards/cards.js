// The following event listener makes instructions show up above the plus icon when you mouse over the plus icon
document.getElementById("addIcon").addEventListener("mouseover", (e)=> {
    document.getElementById("instructions").classList.toggle("hidden");
    e.stopPropagation();
  })
// The following event listener makes instructions disappear above the plus icon when the mouse leaves the plus icon
document.getElementById("addIcon").addEventListener("mouseleave", (e)=> {
    document.getElementById("instructions").classList.toggle("hidden");
    e.stopPropagation();
  })
// The following event listener creates a text input box next to the plus icon when you click on the plus icon
document.getElementById("addIcon").addEventListener("click", (e)=> {
    console.log(e)
    document.getElementById("createItem").innerHTML =
    `<span id="removeSpan">
     <input type="text" name="todo"id="todoItem">
     <button id="addButton"> Add </button>
     <span>`
     addButton();
  });
//The following event listener is on the newly added "add" button (created after the plus icon is clicked) It captures the innerHTML of the input box the user typed into and transfers it to a span underneath the plus icon (along with a checkbox and a delete button)
function addButton () {
  document.getElementById("addButton").addEventListener("click", (e)=> {
    var todoList = document.getElementById("todoItems");
    todoList.innerHTML +=
    `<div class="addedItem">
      <input type="checkbox" name="checkForComplete" class="done">
      <span class="item"> ${document.getElementById("todoItem").value} </span>
      <button class="delete"> Delete </button>
      </div>`
      // The line below removes the span where the user types his/her todo item
      document.getElementById("removeSpan").remove();
      deleteItems();
    });
};
//The following function creates an event listener on the newly created delete buttons. The event listener will delete the item next to the delete button chosen.
function deleteItems (){
    var deleteButtons = document.getElementsByClassName("delete");
    var addedItems = document.getElementsByClassName("addedItem");
      for (i=0; i<deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", (e)=> {
          e.target.parentNode.remove()
        });
    }
    editItem();
  }
function checkbox () {
  var checkboxes = document.getElementsByClassName("done");
      console.log(checkboxes)
        for(i=0; i<checkboxes.length; i++) {
          checkboxes[i].addEventListener('select', (e)=> {
            console.log(e)
          if (checkboxes[i].checked) {
              e.target.nextSibling.classList.toggle("slash");
            }
      })
    }
}
// The following function allows the user to double click on the added item and change the todo item.
function editItem () {
    var edit = document.getElementsByClassName("item");
      for(i=0; i<edit.length; i++) {
          edit[i].addEventListener('dblclick', (e)=> {
          console.log(e)
          var mySpan = e.target;
          var newSpan = document.createElement("span");
          newSpan.innerHTML = `<textarea class="editText"> ${e.target.innerHTML} </textarea>` ;
          e.target.parentNode.replaceChild(newSpan, mySpan);
      })
  }
}
//     var editText = document.getElementsByClassName("editText");
//       for(i=0; i<editText.length; i++) {
//           editText[i].addEventListener('keypress', (e)=> {
//           e.preventDefault();
//           var key = e.which || e.keyCode;
//             if (key === 13) {
//               var mySpan = e.target;
//               var newSpan = document.createElement("span");
//               newSpan.innerHTML = `<span class="item"> ${e.target.innerHTML} </span>` ;
//               e.target.parentNode.replaceChild(newSpan, mySpan);
//           }
//           document.body.addEventListener('mousedown', (e)=> {
//               var mySpan = e.target;
//               var newSpan = document.createElement("span");
//               newSpan.innerHTML = `<span class="item"> ${e.target.innerHTML} </span>` ;
//               e.target.parentNode.replaceChild(newSpan, mySpan);
//           });
//         })
//       }
//     }
//     // 
//   })















