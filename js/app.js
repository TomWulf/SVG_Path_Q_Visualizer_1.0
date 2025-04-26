const svg = document.getElementById("svg");
const curve = document.getElementById("curve");
const startPoint = document.getElementById("startPoint");
const controlPoint = document.getElementById("controlPoint");
const endPoint = document.getElementById("endPoint");
const pathCode = document.getElementById("pathCode");
const helpButton = document.getElementById("helpButton");
const helpModal = document.getElementById("helpModal");
const closeModal = document.querySelector(".close");
const baseLine = document.getElementById("baseLine");
const copyButton = document.getElementById("copyButton");
const controline1 = document.getElementById("controlLine1");
const controline2 = document.getElementById("controlLine2");
const controlJoin = document.getElementById("controlJoin");
const startLabel = document.getElementById("startLabel");
const control1Label = document.getElementById("control1Label");
const endLabel = document.getElementById("endLabel");

const inputs = {
  startX: document.getElementById("startX"),
  startY: document.getElementById("startY"),
  controlX: document.getElementById("controlX"),
  controlY: document.getElementById("controlY"),
  endX: document.getElementById("endX"),
  endY: document.getElementById("endY"),
};

function updateCurve() {
  const startX = parseFloat(inputs.startX.value);
  const startY = parseFloat(inputs.startY.value);
  const controlX = parseFloat(inputs.controlX.value);
  const controlY = parseFloat(inputs.controlY.value);
  const endX = parseFloat(inputs.endX.value);
  const endY = parseFloat(inputs.endY.value);

  // Update the path's "d" attribute
  const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
  curve.setAttribute("d", d);

  pathCode.textContent = "d = '" + d + "'";

  // Update the positions of the points
  startPoint.setAttribute("cx", startX);
  startPoint.setAttribute("cy", startY);
  controlPoint.setAttribute("cx", controlX);
  controlPoint.setAttribute("cy", controlY);
  endPoint.setAttribute("cx", endX);
  endPoint.setAttribute("cy", endY);

  baseLine.setAttribute("x1", startX);
  baseLine.setAttribute("y1", startY);
  baseLine.setAttribute("x2", endX);
  baseLine.setAttribute("y2", endY);

  controline1.setAttribute("x1", startX);
  controline1.setAttribute("y1", startY);
  controline1.setAttribute("x2", controlX);
  controline1.setAttribute("y2", controlY);

  controline2.setAttribute("x1", endX);
  controline2.setAttribute("y1", endY);
  controline2.setAttribute("x2", controlX);
  controline2.setAttribute("y2", controlY);

  // Update the labels
  const offset = 10;
  startLabel.setAttribute("x", inputs.startX.value - offset);
  startLabel.setAttribute("y", inputs.startY.value - offset);
  control1Label.setAttribute("x", inputs.controlX.value - offset);
  control1Label.setAttribute("y", inputs.controlY.value - offset);
  endLabel.setAttribute("x", inputs.endX.value - offset);
  endLabel.setAttribute("y", inputs.endY.value - offset);

}

copyButton.addEventListener("click", () => {
  const pathText = pathCode.value;
  navigator.clipboard.writeText(pathText).then(() => {
    alert("Path copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
});

// Add event listeners to update the curve on input change
Object.values(inputs).forEach(input => {
  input.addEventListener("input", updateCurve);
});

// Show the modal when the help button is clicked
helpButton.addEventListener("click", () => {
  helpModal.style.display = "block";
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  helpModal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === helpModal) {
    helpModal.style.display = "none";
  }
});

// Initialize the curve
updateCurve();
