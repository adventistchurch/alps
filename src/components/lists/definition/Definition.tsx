import React from 'react'
import {Item} from "./Item";

export interface DefinitionProps {
    /**
     * Item => is object with 2 field
     * {
     *     title: string,
     *     text: string
     * }
     */
    items: Item[]
}

/**
 *```tsx
 <Definition
    items={items}
 />
 ```
 ## JSON ITEMS
 ```json
 {
    "items": [
        {
          "title": "Definition List",
          "text": "A number of connected items or names written or printed consecutively, typically one below the other."
        },
        {
          "title": "This is a term.",
          "text": "This is the definition of that term, which both live in a <code>dl</code>."
        },
        {
          "title": "Here is another term.",
          "text": "And it gets a definition too, which is this line."
        },
        {
          "title": "Here is term that shares a definition with the term below.",
          "text": "And it gets a definition too, which is this line."
        }
    ]
}
 ```
 */
export const Definition = ({items = []}: DefinitionProps): JSX.Element => {
    return (
        <dl>
            {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                renderItems(items, ({text, title}) => (
                    <>
                        <dt className={"u-padding--top"}>
                            {title}
                        </dt>
                        <dd className={"u-padding--bottom"}>
                            {text}
                        </dd>
                    </>
                ))
            }
        </dl>
    )
}


/**
 * Renders an array of items using a component
 *
 * @param {Array} items List of items to loop through
 * @param {ReactComponent} Component React Component used to render every item
 */
function renderItems(items: Item[], Component: any) {
    return (
        items &&
        items.map((item, key) => <Component {...item} key={key}/>)
    )
}
