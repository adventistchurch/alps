
export function tooltip (value: string | undefined, elementId: string) {
    navigator.clipboard.writeText(value ?? "");

    var tooltip = document.getElementById(elementId);
    if (tooltip)
        tooltip.innerHTML = "Copied: " + value;
}

export function outFunc(elementId: string) {
    var tooltip = document.getElementById(elementId);
    if (tooltip)
        tooltip.innerHTML = "Copy to clipboard";
}