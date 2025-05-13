import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Progress, ProgressProps, sizeMap } from './Progress';
import { Button } from '../../../atoms/button/Button';

const meta = {
  title: 'molecules/components/Progress',
  component: Progress,
  tags: [ 'autodocs' ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
  argTypes: {
    fixed: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    percentage: {
      control: { type: 'number', min: 0, max: 100 },
    },
    size: {
      defaultValue: sizeMap.medium,
      control: { type: 'select' },
    },
    visible: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithPercentage: Story = {
  args: {
    percentage: 50,
  },
};

export const Hairline: Story = {
  args: {
    size: 'hairline',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Huge: Story = {
  args: {
    size: 'huge',
  },
};

export const Fixed: Story = {
  args: {
    fixed: true,
  },
  render: (args: ProgressProps) => {
    const [ percentage, setPercentage ] = useState(50);

    return (
      <div className="u-padding--double u-spacing--double">
        <Progress {...args} percentage={percentage}/>
        <h1>Scroll until you see <em>Hello!</em></h1>

        {[ 1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ].map((x) => (
          <div key={`p-${x}`}>
            <Button label={`Set to ${x}%`} onClick={() => setPercentage(x)}/>
          </div>
        ))}

        <h1 style={{ marginTop: '50vh' }}>
          <em>Hello!</em>
        </h1>
      </div>
    );
  },
};
