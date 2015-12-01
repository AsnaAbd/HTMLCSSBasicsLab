
var diametres = [4878, 12104, 12756, 6787,142800,120000, 51200, 48600];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    var block = document.getElementById("blocks");
        for (var i = 0; i < diametres.length; i++) {
            var mondiv = document.createElement('div');
            mondiv.style.width = diametres[i]*(500/150000)+"px";
            mondiv.textContent = names[i];
            mondiv.style.margin = "10px";
            mondiv.style['padding'] = "0 0 0 30px";
            block.appendChild(mondiv);
          }
