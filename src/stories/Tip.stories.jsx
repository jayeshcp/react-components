import React from 'react';

import { Tip } from './Tip';

export default {
  title: 'Example/Tip',
  component: Tip
};

const Template = (args) => <Tip {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Select multiple items to delete them all in bulk'
};
