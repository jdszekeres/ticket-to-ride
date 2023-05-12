function drawCitiesOnMap(cityCoordinates) {
    // Load the US map data
    canvas = document.getElementById("map")
    ctx=canvas.getContext("2d")
    path = d3.geoPath().context(ctx);

    d3.json("https://unpkg.com/us-atlas@1/us/10m.json", function(error, us) {
    if (error) throw error;
    
    ctx.beginPath();
    ctx.fillColor = "red";
    path(us);
    ctx.stroke();
    });
  }
  
  
  

function render_cards(cards) {
    cards_element = document.getElementById("cards")
    while (cards_element.firstChild) {
        menu.removeChild(cards_element.firstChild);
    }
    render_html = ""
    cards.forEach(color => {
        card = `<img src="assets/train_cards/${color}.png" width="200px" class="card">`
        render_html += card
    });
    cards_element.innerHTML = render_html
}