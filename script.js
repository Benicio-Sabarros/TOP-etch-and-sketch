window.onload = () => {
    const container = document.querySelector("#container");
    const input = document.querySelector("#input");
    const label = document.querySelector("label");

    let gridSize = 16;

    function def(){
        this.setAttribute("style","background: black;");
    }

    function changeGrid(){
        if(document.getElementById("input").value > 0 && document.getElementById("input").value <= 100){
            label.textContent = "Enter the amount of squares per side";
            gridSize = document.getElementById("input").value;
            grid(gridSize);
        } else {
            label.textContent = "Sorry, your input has to be a number between 1 and 100";
        }
    }
    input.addEventListener("change", changeGrid);

    function grid(size){
        container.innerHTML = "";
        for(i = 0; i < size; i++){
            let column = document.createElement("div");
            column.setAttribute("style", `width: ${600 / size};`);
            column.classList.add("column")
            for(j = 0; j < size; j++){
                let pixel = document.createElement("div");
                pixel.setAttribute("style", `width: ${600 / size}; height: ${600 / size}; background: white;`);
                pixel.classList.add("pixel");
                pixel.addEventListener("mousemove", def);
                column.appendChild(pixel);
            }
            container.appendChild(column);
        }
    }
    grid(gridSize);
}

