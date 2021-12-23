
export function tooltip (value, elementId) {
    navigator.clipboard.writeText(value);

    var tooltip = document.getElementById(elementId);
    tooltip.innerHTML = "Copied: " + value;
}

export function outFunc(elementId) {
    var tooltip = document.getElementById(elementId);
    tooltip.innerHTML = "Copy to clipboard";
}