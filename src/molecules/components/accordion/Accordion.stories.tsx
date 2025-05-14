import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

const items = [
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
    onChange: (open: boolean) => console.log('Is open?', open),
    content: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        impedit esse dolores maiores repellat doloremque quae animi sapiente
        odio voluptate?
      </p>
    ),
  },
];

const meta = {
  title: 'molecules/components/Accordion',
  component: Accordion,
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Accordion>
      {items.map((props, i) => (
        <AccordionItem {...props} key={`item-${i}`}/>
      ))}
    </Accordion>
  ),
};
