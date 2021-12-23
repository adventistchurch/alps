import React from "react";

import {colorsConfig} from "./_config";
import "./colors.scss";
import {ColorItem} from "./ColorItem";
import {ColorTooltip} from "./ColorTooltip";

export const Colors = (): JSX.Element => {
    const brightColorRows: JSX.Element[][] = [];
    brightColorRows.push(generateColorRows(colorsConfig.brightColors));

    const mutedColorRows: JSX.Element[][] = [];
    mutedColorRows.push(generateColorRows(colorsConfig.mutedColors));

    const neutralsColorRows: JSX.Element[][] = [];
    neutralsColorRows.push(generateColorRows(colorsConfig.neutralsColors));


    return (
        <div>
            <h2>{colorsConfig.brightColorsLabel}</h2>
            {brightColorRows[0][0]}
            {brightColorRows[0][2]}
            <h2>{colorsConfig.mutedColorsLabel}</h2>
            {mutedColorRows[0][0]}
            {mutedColorRows[0][2]}
            <h2>{colorsConfig.neutralsColorsLabel}</h2>
            {neutralsColorRows[0][0]}
            {neutralsColorRows[0][2]}
            <h1>Extended Colors</h1>
            {brightColorRows[0][1]}
            {brightColorRows[0][3]}
            {mutedColorRows[0][1]}
            {mutedColorRows[0][3]}
            {neutralsColorRows[0][1]}
            {neutralsColorRows[0][3]}
        </div>
    )
}

const generateTableItem = (theme: string, hex: string, rgb: string) => {
    return (
        <tr tabIndex={0} className={"tr-table"}>
            <td width={"40px"} className={"td-table"}>
                <div className="color-square__table" style={{backgroundColor: hex}}/>
            </td>
            <td>{theme}</td>
            <td width={"45%"} className={"td-table"}>
                <span className="color__table">HEX</span>
                : <ColorTooltip content={hex} id={`${theme}-${hex}`}/>
            </td>
            <td width={"25%"} className={"td-table"}>
                <span className="color__table">RGB</span>
                : <ColorTooltip content={rgb} id={`${theme}-${rgb}`}/>
            </td>
        </tr>
    )
}

const generateColorRows = (colors: ColorItem[][]) => {
    const rows: JSX.Element[] = [];

    colors.forEach(row => {
        const boxes: ColorItem[] = [];

        row.forEach(box => boxes.push(box));

        const htmlBoxes: JSX.Element[] = [];
        const colorsTables: JSX.Element[] = [];

        boxes.forEach(box => {

            if (box.color_1) {
                const group =
                    <span style={{color: "#717171", fontSize: "14px"}}> {`(${box.group})`}</span>
                const table =
                    <div>
                        <h3>
                            {box.name}
                            {group}
                        </h3>
                        <table width={"100%"} className={"colors-table"}>
                            {box.rgb_1 && generateTableItem(box.name + " - Darker", box.color_1, box.rgb_1)}
                            {box.color_2 && box.rgb_2 && generateTableItem(box.name + " - Dark", box.color_2, box.rgb_2)}
                            {generateTableItem(box.name + " - Base", box.color_3, box.rgb)}
                            {box.color_4 && box.rgb_4 && generateTableItem(box.name + " - Light", box.color_4, box.rgb_4)}
                            {box.color_5 && box.rgb_5 && generateTableItem(box.name + " - Lighter", box.color_5, box.rgb_5)}
                        </table>
                        <br/>
                        <hr/>
                        <br/>
                    </div>

                colorsTables.push(table);
            }

            const element =
                <div className={"box"}>
                    <div className={"box-1"} style={{backgroundColor: box.color_3}}/>
                    <div className="colors-list">
                        {box.color_1 &&
                        <>
                            <div className={"colors-item"} style={{backgroundColor: box.color_1}}/>
                            <div className={"colors-item"} style={{backgroundColor: box.color_2}}/>
                            <div className={"colors-item"} style={{backgroundColor: box.color_3}}/>
                            <div className={"colors-item"} style={{backgroundColor: box.color_4}}/>
                            <div className={"colors-item"} style={{backgroundColor: box.color_5}}/>
                        </>
                        }
                    </div>
                    <div className={"box-3"}>
                        <span className={"colors-name span"}>{box.name}</span>
                        <ColorTooltip label={"HEX"} content={box.hex} id={`${box.name}-${box.hex}`}/>
                        <ColorTooltip label={"RGB"} content={box.rgb} id={`${box.name}-${box.rgb}`}/>
                        {box.cmyk &&
                        <ColorTooltip label={"CMYK"} content={box.cmyk} id={`${box.name}-${box.cmyk}`}/>
                        }
                        {box.pantone &&
                        <ColorTooltip label={"Pantone"} content={box.pantone} id={`${box.name}-${box.pantone}`}/>
                        }
                        {box.sass &&
                        <ColorTooltip label={"SASS"} content={box.sass} id={`${box.name}-${box.sass}`}/>
                        }
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

        rows.push(
            <>
                {colorsTables[0]}
                {colorsTables[1]}
                {colorsTables[2]}
                {colorsTables[3]}
            </>
        );
    });

    return rows;
}