const toDoList = [
  { id: 1, title: "Nullsh Coalescing Operator", link: "nullshCoalescing" },
  { id: 2, title: "Objetos", link: "objects" },
  { id: 3, title: "Desestruturação", link: "destructuring" },
  { id: 4, title: "Rest Operator", link: "restOperator" },
  { id: 5, title: "Optional Chaining", link: "optionalChaining" },
  { id: 6, title: "Map()", link: "map" },
  { id: 7, title: "Filter()", link: "filter" },
  { id: 8, title: "Every()", link: "every" },
  { id: 9, title: "Some()", link: "some" },
  { id: 10, title: "Find e FindInder()", link: "findAndFindindex" },
  { id: 11, title: "Reduce()", link: "reduce" },
  { id: 12, title: "Template Literals", link: "templateLiterals" },
  { id: 13, title: "Promises", link: "promises" },
  { id: 14, title: "Import e Export", link: "importsAndExport" },
]

const listContainer = document.querySelector("#list")

function renderList(toDoList) {
  let list = ""

  if (toDoList.lenght <= 0) {
    list += `<div>Nenhum item na sua lista</div>`
  } else {
    toDoList.forEach((toDoItem, index) => {
      list += `
      <div id="itemLista"><a href="pages/${toDoItem.link}/index.html">&#x1F4A5 ${toDoItem.title} &#x1F4A5</a></div>
      `
    })
  }
  listContainer.innerHTML = list
}

renderList(toDoList)
