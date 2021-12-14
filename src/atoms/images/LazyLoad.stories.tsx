import React from 'react';
import {Meta} from "@storybook/react";
import {Image} from "./Image";
import {range} from "../../helpers/range";

export default {
    title: "atoms/images/Lazy",
} as Meta;

const LazyTemplate: () => JSX.Element[] = () => {
    return (
        range(10, 50).map((x, i) => (
            <Image
                lazy={true}
                src={`//picsum.photos/id/${x}1/300/200`}
                placeholderSrc={`//picsum.photos/id/${x}1/30/20`}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                width="300"
                height="200"
                key={`lazy-image-${i}`}
            />
        ))
    )
}
export const Lazy = LazyTemplate.bind({});
