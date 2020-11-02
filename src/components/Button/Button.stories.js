import React from "react";
import { Button } from "./Button";

export default {
  title: "components/shared/Button",
  component: Button,
  args: { children: "default args" },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export const Primary = () => <Button type="danger">Primary</Button>;
export const Success = () => <Button type="success">Success</Button>;
export const Danger = () => <Button type="danger">Danger</Button>;
export const Large = () => <Button large>Large</Button>;

Primary.storyName = "Prmiary or default";

//args mechanism

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  type: "danger",
  children: "Primary A",
};

export const SecondaryA = Template.bind({});

SecondaryA.args = {
  ...PrimaryA.args,
  children: "Secondary A",
};
export const DefaultA = Template.bind({});
