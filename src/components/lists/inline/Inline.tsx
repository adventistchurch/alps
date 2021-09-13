import React from 'react'
import {Item} from "./Item";

export interface InlineProps {
    /**
     * Item => is object with 2 field
     * {
     *     text: string
     * }
     */
    items: Item[]
}

/**
 *```tsx
 <Inline
    items={items}
 />
 ```
 ## JSON ITEMS
 ```json
 {
    "items": [
        {
          "text": "Item Number 1"
        },
        {
          "text": "Item Number 2"
        },
        {
          "text": "Item Number 3"
        },
        {
          "text": "Item Number 4"
        },
        {
          "text": "Item Number 5"
        }
    ]
}
 ```
 */
export const Inline = ({items = []}: InlineProps): JSX.Element => {
    return (
        <ul className="o-inline-list">
            {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                renderItems(items, ({ text }) => (
                    <li>{text}</li>
                ))
            }
        </ul>
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
