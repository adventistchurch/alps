import {Item} from "./Item";
import React from "react";

export interface UnorderedProps {
    /**
     * Item => is object with 2 field
     * {
     *     text: string
     *     subItems?: {text: string}[]
     * }
     */
    items: Item[]
}


/**
 *```tsx
 <Unordered
    items={items}
 />
 ```
 ## JSON ITEMS
 ```json
 {
    "items": [
        { "text": "This is a list item in an ordered list" },
        {
            "text": "An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters."
        },
        {
            "text": "List item with nested list (unordered)",
            "subItems": [
                { "text": "This is a nested list item" },
                { "text": "This is another nested list item in an ordered list" }
            ]
        },
        {
            "text": "List item with nested list (ordered)",
            "subItems": [
            { "text": "This is a nested list item of an ordered list" },
            { "text": "This is another nested list item in an ordered list" }
            ]
        },
        { "text": "Item 6" },
        { "text": "Item 7" }
    ]
}
 ```
 */
export const Unordered = ({items}: UnorderedProps): JSX.Element => {

    return (
        <div className={"text"}>
            <ul>
                {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    renderItems(items, ({text, subItems}) => (
                        <li>
                            {text}
                            {subItems && <ul>{renderItems(subItems, (
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                {text}) => (<li>{text}</li>))}</ul>}
                        </li>
                    ))
                }
            </ul>
        </div>
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