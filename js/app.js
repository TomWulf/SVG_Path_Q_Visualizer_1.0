const svg = document.getElementById("svg");
const curve = document.getElementById("curve");
const startPoint = document.getElementById("startPoint");
const controlPoint = document.getElementById("controlPoint");
const endPoint = document.getElementById("endPoint");
const pathCode = document.getElementById("pathCode");
const helpButton = document.getElementById("helpButton");
const helpModal = document.getElementById("helpModal");
const closeModal = document.querySelector(".close");


const inputs = {
  startX: document.getElementById("startX"),
  startY: document.getElementById("startY"),
  controlX: document.getElementById("controlX"),
  controlY: document.getElementById("controlY"),
  controlX2: document.getElementById("controlX2"),
  controlY2: document.getElementById("controlY2"),
  endX: document.getElementById("endX"),
  endY: document.getElementById("endY"),
};

function updateCurve() {
  const startX = parseFloat(inputs.startX.value);
  const startY = parseFloat(inputs.startY.value);
  const controlX = parseFloat(inputs.controlX.value);
  const controlY = parseFloat(inputs.controlY.value);
  const controlX2 = parseFloat(inputs.controlX2.value);
  const controlY2 = parseFloat(inputs.controlY2.value);
  const endX = parseFloat(inputs.endX.value);
  const endY = parseFloat(inputs.endY.value);
  const copyButton = document.getElementById("copyButton");

  // Update the path's "d" attribute
  const d = `M ${startX},${startY} C ${controlX},${controlY} ${controlX2},${controlY2} ${endX},${endY}`;
  curve.setAttribute("d", d);
  pathCode.value = "d = '" + d + "'";

  // Update the positions of the points
  startPoint.setAttribute("cx", startX);
  startPoint.setAttribute("cy", startY);
  controlPoint.setAttribute("cx", controlX);
  controlPoint.setAttribute("cy", controlY);
  controlPoint2.setAttribute("cx", controlX2);
  controlPoint2.setAttribute("cy", controlY2);
  endPoint.setAttribute("cx", endX);
  endPoint.setAttribute("cy", endY);
}

const controlPoint2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
controlPoint2.setAttribute("id", "controlPoint2");
controlPoint2.setAttribute("r", "5");
controlPoint2.setAttribute("fill", "green");
svg.appendChild(controlPoint2);

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
