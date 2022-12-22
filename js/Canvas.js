class Canvas {
  constructor(document, dimention = 16) {
    this.height = dimention;
    this.width = dimention;
    this.canvas = document.querySelector(".drawing-board");
    this.mouseDown = this.bodyMouseListener();
    this.currentColors = ["#000000"];
    this.buildCanvas();
  }

  bodyMouseListener() {
    const body = document.body;
    body.addEventListener("mousedown", () => {
      this.mouseDown = true;
    });
    body.addEventListener("mouseup", () => (this.mouseDown = false));
    return false;
  }

  buildCanvas() {
    for (let i = 0; i < this.height; i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");
      this.buildRow(row);
      this.canvas.appendChild(row);
    }
  }

  buildRow(row) {
    for (let i = 0; i < this.width; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      this.addCellEvents(cell);
      row.appendChild(cell);
    }
  }

  addCellEvents(cell) {
    cell.addEventListener("mouseover", this.paintCell);
    cell.addEventListener("mousedown", this.paintCell);
    cell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
    cell.addEventListener("drop", (event) => {
      event.preventDefault();
    });
    cell.self = this;
  }

  paintCell(e) {
    if (e.type === "mouseover" && !e.currentTarget.self.mouseDown) return;
    this.style.backgroundColor = e.currentTarget.self.randomColor(
      e.currentTarget.self.currentColors
    );
  }

  randomColor(colors) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }

  clear() {
    const cells = (this.canvas = document.querySelectorAll(".grid-cell"));
    cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  }
}

export default Canvas;
