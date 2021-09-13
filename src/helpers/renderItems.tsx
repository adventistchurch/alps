import React from 'react'

/**
 * Renders an array of items using a component
 *
 * @param {Array} items List of items to loop through
 * @param {ReactComponent} Component React Component used to render every item
 * @param {Object} props Extra props to be provided to every item
 */
function renderItems(items: any[], Component: any, props: any) {
    return (
        items &&
        items.map((item, key) => <Component {...props} {...item} key={key}/>)
    )
}

export default renderItems
