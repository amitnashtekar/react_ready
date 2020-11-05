import React from 'react';
import { Input } from './Input';

export default {
	title: 'components/shared/Input',
	component: Input
};

export const LargeInput = () => <Input large placeholder="large input" />;
export const InputBox = () => <Input placeholder=" input" />;

InputBox.storyName = 'Normal Input';
