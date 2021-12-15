
export function tooltip (value, elementId) {
    // var copyText = document.getElementById("myInput");
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    console.log("VVVL: " + value);
    navigator.clipboard.writeText(value);

    var tooltip = document.getElementById(elementId);
    tooltip.innerHTML = "Copied: " + value;
}

export function outFunc(elementId) {
    var tooltip = document.getElementById(elementId);
    tooltip.innerHTML = "Copy to clipboard";
}