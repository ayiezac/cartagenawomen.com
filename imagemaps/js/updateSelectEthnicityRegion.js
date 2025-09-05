const selectElement = document.querySelector("select#region-area");
function updateSelectName(selectElement) {
    // Get the selected value
    const selectedValue = selectElement.value;
    // Update the name attribute
    if (selectedValue === "Colombia") {
        selectElement.setAttribute("name", "country[]");
    }
    else {
        selectElement.setAttribute("name", "region[]");
    }
}

window.onchange = () => {
	updateSelectName(selectElement);
};