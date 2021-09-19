import React from 'react';
import {Meta} from "@storybook/react";
import {Accordion} from "./Accordion";
import {AccordionItem} from "./AccordionItem";

const items = [
    // {
    //     heading: 'Media block without image',
    //     content: (
    //         <MediaBlock
    //             description="Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at sem at felis rhoncus varius eget vel ipsum."
    //             url="https://www.adventist.org"
    //             cta="Find our more"
    //         />
    //     ),
    // },
    // {
    //     heading: 'Media block with image',
    //     content: (
    //         <MediaBlock
    //             title="Media Block with image"
    //             description="Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at sem at felis rhoncus varius eget vel ipsum."
    //             image={{
    //                 srcSet: {
    //                     default: '//picsum.photos/500/282',
    //                     500: '//picsum.photos/900/507',
    //                     750: '//picsum.photos/700/395',
    //                     1200: '//picsum.photos/500/282',
    //                 },
    //                 alt: 'Voluptas ex minus rerum asperiores sunt.',
    //             }}
    //         />
    //     ),
    // },
    // {
    //     heading: 'Content block',
    //     content: (
    //         <ContentBlock
    //             title="Content Block"
    //             description="Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at sem at felis rhoncus varius eget vel ipsum."
    //         />
    //     ),
    // },
    {
        heading: 'Plain HTML',
        content: (
            <p>
                Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus
                luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at
                non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit
                aliquet. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at
                sem at felis rhoncus varius eget vel ipsum.
            </p>
        ),
    },
    {
        heading: 'With Icon',
        icon: 'contact',
        content: (
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
                impedit esse dolores maiores repellat doloremque quae animi sapiente
                odio voluptate?
            </p>
        ),
    },
    {
        heading: 'With onChange',
        onChange: (open: any) => console.log('Is open?', open), // eslint-disable-line no-console
        content: (
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
                impedit esse dolores maiores repellat doloremque quae animi sapiente
                odio voluptate?
            </p>
        ),
    },
];

export default {
    title: "molecules/components/Accordion"
} as Meta;

const Template: () => JSX.Element = () => {
    return (
        <Accordion>
            {items.map((props, i) => (
                <AccordionItem {...props} key={`item-${i}`}/>
            ))}
        </Accordion>
    )
}
export const Basic = Template.bind({});