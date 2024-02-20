import React from 'react';

export const TypeStyles = () => {
    return (
        <div className="u-spacing">
            <h2>Type Styles</h2>
            <div className="u-spacing--half">
                <h3 className="u-text-decoration--underline">Primary</h3>
                <p className={'u-font--primary--xxl'}>.u-font--primary--xxl</p>
                <p className="u-font--primary--xl">.u-font--primary--xl</p>
                <p className="u-font--primary--l">.u-font--primary--l</p>
                <p className="u-font--primary--m">.u-font--primary--m</p>
                <p className="u-font--primary--s">.u-font--primary--s</p>
                <p className="u-font--primary--xs">.u-font--primary--xs</p>
            </div>
            <div className="u-spacing--half">
                <h3 className="u-text-decoration--underline">Secondary</h3>
                <p className="u-font--secondary--xl">.u-font--secondary--xl</p>
                <p className="u-font--secondary--l">.u-font--secondary--l</p>
                <p className="u-font--secondary--m">.u-font--secondary--m</p>
                <p className="u-font--secondary--s">.u-font--secondary--s</p>
                <p className="u-font--secondary--xs">.u-font--secondary--xs</p>
            </div>
        </div>
    )
}