const svg = document.getElementById("svg");
const curve = document.getElementById("curve");
const startPoint = document.getElementById("startPoint");
const controlPoint = document.getElementById("controlPoint");
const endPoint = document.getElementById("endPoint");
const pathCode = document.getElementById("pathCode");

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
  pathCode.setAttribute("textContent", d);

  // Update the positions of the points
  startPoint.setAttribute("cx", startX);
  startPoint.setAttribute("cy", startY);
  controlPoint.setAttribute("cx", controlX);
  controlPoint.setAttribute("cy", controlY);
  endPoint.setAttribute("cx", endX);
  endPoint.setAttribute("cy", endY);
}

// Add event listeners to update the curve on input change
Object.values(inputs).forEach(input => {
  input.addEventListener("input", updateCurve);
});

// Initialize the curve
updateCurve();
