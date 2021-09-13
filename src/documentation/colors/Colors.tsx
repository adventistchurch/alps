import React from "react";

import {colorsConfig} from "./_config";
import "./colors.scss";

export const Colors = (): JSX.Element => {

    const rows: any[] = [];

    colorsConfig.forEach(row => {
        const boxes: any[] = [];
        row.forEach(box => boxes.push(box));

        const htmlBoxes: any[] = [];

        boxes.forEach(box => {
            const element =
                <div className={"box"}>
                    <div className={"box-1"} style={{backgroundColor: box.color_3}}/>
                    <div className="colors-list">
                        <div className={"colors-item"} style={{backgroundColor: box.color_1}}/>
                        <div className={"colors-item"} style={{backgroundColor: box.color_2}}/>
                        <div className={"colors-item"} style={{backgroundColor: box.color_3}}/>
                        <div className={"colors-item"} style={{backgroundColor: box.color_4}}/>
                        <div className={"colors-item"} style={{backgroundColor: box.color_5}}/>
                    </div>
                    <div className={"box-3"}>
                        <span className={"colors-name span"}>{box.name}</span>
                        <div className={"colors-internals"}><span className={"span"}>HEX</span> {box.hex}</div>
                        <div className={"colors-internals"}><span className={"span"}>RGB</span> {box.rgb}</div>
                        <div className={"colors-internals"}><span className={"span"}>CMYK</span> {box.cmyk}</div>
                        <div className={"colors-internals"}><span className={"span"}>Pantone</span> {box.pantone}</div>
                    </div>
                </div>
            htmlBoxes.push(element);
        });

        rows.push(
            <div className={"row"}>
                {htmlBoxes[0]}
                {htmlBoxes[1]}
                {htmlBoxes[2]}
                {htmlBoxes[3]}
            </div>
        );
    })

    return (
        <div>
            {rows[0]}
            {rows[1]}
            {rows[2]}
            {rows[3]}
        </div>
    )
}