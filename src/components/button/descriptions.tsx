// BUTTON SECTION
//-----DISABLE--------------------------------------------------
export const buttonDisableDesc = `
\`\`\`tsx
<Button
    label={"Learn More"}
    disabled={true} 
/>
\`\`\`
`;

//-----LIGHTER--------------------------------------------------

export const buttonLighterDesc = `
\`\`\`tsx
<Button
    label={"Learn More"}
    lighter={true} 
/>
\`\`\`
`;

//-----OUTLINE--------------------------------------------------

export const buttonOutlineDesc = `
\`\`\`tsx
<Button
    label={"Learn More"}
    outline={true} 
/>
\`\`\`
`;

//-----SIMPLE---------------------------------------------------

export const buttonSimpleDesc = `
\`\`\`tsx
<Button
    label={"Learn More"}
    simple={true} 
/>
\`\`\`
`;

//-----SMALL----------------------------------------------------

export const buttonSmallDesc = `
\`\`\`tsx
<Button
    label={"Learn More"}
    small={true} 
/>
\`\`\`
`;

//-----TOGGLE---------------------------------------------------

export const buttonToggleDesc = `
\`\`\`tsx
<Button
    outline={true}
    small={true}
    toggle={true}
    icon={"plus"}
    iconPosition={"left}
/>
\`\`\`
`;

//-----WITH ICON-------------------------------------------------
export const buttonWithIconDesc = `
When words are not enough, icons can be used in buttons to better communicate what the button does. Icons should be
always paired with text whenever possible.
Use the \`icon\` and \`title\` prop to add an Icon to the Button. Refer to the [Icon](https://adventistchurch.github.io/alps/?path=/story/components-icon--default-icon) documentation for usage.
To show the Icon on the left side use the \`iconPosition\` prop.

By changing the \`icon\` prop you can use different icons of the button.

| Icon   |  Description  |
|----------|-------------|
| \`arrow-brackets-left\` | |
| \`arrow-brackets-right\` | |
| \`arrow-long-left\` | |
| \`arrow-long-right\` | |
| \`arrow-short-left\` | |
| \`arrow-short-right\` | |
| \`close\` | |
| \`contact\` | |
| \`dots\` | |
| \`find\`| |
| \`heart\`| |
| \`language\`| |
| \`legal\`| |
| \`logo\`| |
| \`logo-dark\`| |
| \`logo-round\`|  |
| \`menu\`| |
| \`plus\`| |
| \`search\`| |
| \`share\`| |
| \`subscribe\`| |

\`\`\`tsx
<Button
    label={"Learn More"}
    small={true} 
    icon={"arrow-brackets-left"}
/>
\`\`\`
`;