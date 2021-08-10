import React from "react";

import Mybutton from "./CustomButton";

import { action } from "@storybook/addon-actions";


export default {
  title: "atoms/Button",
  component: Mybutton,
};
const Template = (args) => <Mybutton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
 variant:"contained",
 text:"BUY/SELL",
 color:"primary",
};


