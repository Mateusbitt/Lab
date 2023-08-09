var header = document.getElementById("headerContainer")
var navigationHeader = document.getElementById("navHeader")
var container = document.getElementById("fullContainer")
var showSidebar = false

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    toggleSidebar()
  }
})

function toggleSidebar() {
  showSidebar = !showSidebar
  if (showSidebar) {
    navigationHeader.style.marginLeft = "-10vw"
    container.style.filter = "blur(2px)"
  } else {
    navigationHeader.style.marginLeft = "-100vw"
    container.style.filter = ""
  }
}

function closeSidebar() {
  if (showSidebar) {
    toggleSidebar()
  }
}

function funfando() {
  console.log("Sa porra ta on")
}
