const toDoList = [
  { id: 1, title: "Nullsh Coalescing Operator" },
  { id: 2, title: "Objetos" },
  { id: 3, title: "Desestruturação" },
  { id: 4, title: "Rest Operator" },
  { id: 5, title: "Optional Chaining" },
  { id: 6, title: "Map()" },
  { id: 7, title: "Filter()" },
  { id: 8, title: "Every()" },
  { id: 9, title: "Some()" },
  { id: 10, title: "Find e FindInder()" },
  { id: 11, title: "Reduce()" },
  { id: 12, title: "Template Literals" },
  { id: 13, title: "Promises" },
  { id: 14, title: "Import e Export" },
]

const listContainer = document.querySelector("#list")

function renderList(toDoList) {
  let list = ""

  if (toDoList.lenght <= 0) {
    list += `<div>Nenhum item na sua lista</div>`
  } else {
    toDoList.forEach((toDoItem, index) => {
      list += `
      <div id="itemLista"><a href="#">&#x1F4A5 ${toDoItem.title} &#x1F4A5</a></div>
      `
    })
  }
  listContainer.innerHTML = list
}

renderList(toDoList)
