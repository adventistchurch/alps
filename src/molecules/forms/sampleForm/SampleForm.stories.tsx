import React from "react";
import {Meta, Story} from '@storybook/react';
import {SampleForm, SampleFormProps} from "./SampleForm";
import data from "./SampleForm.stories.json";
import Title from "../../../components/text/Title";
import {TextField} from "../elements/TextField";
import {OptionGroup} from "../elements/OptionGroup";
import {Checkbox} from "../elements/Checkbox";
import RadioButton from "../elements/RadioButton";
import {Dropdown} from "../elements/Dropdown";
import {Button} from "../../../components/button/Button";

export default {
    title: "molecules/forms/Sample Form",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: SampleForm,
    argTypes: {}
} as Meta;

const Template: Story<SampleFormProps> = (args) => {
    return (
        <SampleForm
            title={
                <Title
                    fontSize="m"
                    fontType="secondary"
                    text={data.title}
                    themeColor="darker"
                />
            }
        >
            <TextField id="name" label="Name" name="name"/>
            <TextField label="Form" labelOptional="Optional" name="optional"/>
            <TextField
                label="Error Label"
                name="error"
                error="This field is required"
            />
            <TextField
                type="textarea"
                label="Your Comments"
                name="comments"
                placeholder="Enter a comment"
                rows={8}
            />
            <OptionGroup title="Select many options">
                <Checkbox label="Option 1" name="checkbox-one" value="checkbox-one"/>
                <Checkbox label="Option 2" name="checkbox-two" value="checkbox-two"/>
            </OptionGroup>
            <OptionGroup title="Select one option">
                <RadioButton
                    checked={true}
                    label="Option 1"
                    name="radio"
                    value="radio-one"
                />
                <RadioButton label="Option 2" name="radio" value="radio-two"/>
                <RadioButton label="Option 3" name="radio" value="radio-three"/>
            </OptionGroup>
            <OptionGroup title="Select from this list:">
                <Dropdown
                    name="select"
                    label=""
                    hideNone
                    options={[
                        {text: 'Option 1', value: 'one'},
                        {text: 'Option 2', value: 'two'},
                        {text: 'Option 3', value: 'three'},
                        {text: 'Option 4', value: 'four'},
                    ]}
                    defaultValue={""}
                />
            </OptionGroup>
            <Button label={data.submitLabel}/>
            <Button label={data.cancelLabel} simple/>
        </SampleForm>
    )
};

export const Basic = Template.bind({});
