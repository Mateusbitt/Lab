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

async function searchMovie() {
  const searchTerm = document.getElementById("searchInput").value
  const resultsContainer = document.getElementById("resultsContainer")

  if (searchTerm.length === 0) {
    resultsContainer.classList.add("hidden")
    return
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?region=BR&language=pt-BR&api_key=fc7d295c26d9108d9d70c770ee1064b7&query=${searchTerm}`
    );
    const data = await response.json();
    
    if (!data.results || !Array.isArray(data.results)) {
      console.log("Nenhum resultado encontrado.");
      return;
    }
  
    if (data.results.length === 0) {
      resultsContainer.innerHTML = "<p>Sem resultados</p>";
      return;
    }
  
    resultsContainer.classList.remove("hidden");
    const topResults = data.results.slice(0, 25);
    showSearchResults(topResults);
  } catch (error) {
    console.log(error);
  }
}

function showSearchResults(results) {
  const resultsContainer = document.getElementById("resultsContainer")
  resultsContainer.innerHTML = ""

  results.forEach((item) => {
    const card = document.createElement("div")
    card.classList.add("result-card")
    card.innerHTML = `
      <a href="pages/detailPage/detailPage.html?movieId=${item.id}">${item.title || item.name}</a>
      `
    resultsContainer.appendChild(card)
  })
}
