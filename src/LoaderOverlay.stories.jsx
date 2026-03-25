import React from 'react';
import LoaderOverlay from './index.jsx';

export default {
  title: 'Components/LoaderOverlay',
  component: LoaderOverlay,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse', 'ring', 'bar'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['dark', 'light', 'blur', 'transparent', 'gradient'],
    },
    color: { control: 'color' },
    progress: { control: { type: 'range', min: 0, max: 100 } },
    blur: { control: { type: 'range', min: 0, max: 20 } },
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
  },
};

export const Default = {
  args: {
    show: true,
    type: 'spinner',
    size: 'md',
    variant: 'dark',
    color: '#a78bfa',
    message: 'Loading...',
    submessage: '',
    fullScreen: true,
    showProgress: false,
    progress: 0,
    closable: false,
    animateIn: true,
  },
};

export const LightMode = {
  args: {
    ...Default.args,
    variant: 'light',
    color: '#3b82f6',
  },
};

export const FileUploadProgress = {
  args: {
    ...Default.args,
    type: 'dots',
    variant: 'gradient',
    color: '#60d394',
    message: 'Uploading archive...',
    showProgress: true,
    progress: 65,
  },
};
