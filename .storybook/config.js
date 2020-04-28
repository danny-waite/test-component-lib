import { addDecorator, configure } from '@storybook/react'
import { withGrommet } from 'storybook-addon-grommet'
import { grommet, dark } from 'grommet'
// import {
//   black,
//   light,
//   materialdark,
//   materiallight,
//   metro
// } from "grommet-controls";

import { default as gopher } from '../src/theme'

addDecorator(
  withGrommet({
    theme: 'gopher',
    themes: {
      grommet,
      // dark,
      // black,
      // light,
      // materialdark,
      // materiallight,
      // metro,
      gopher
    },
    boxProps: {
      align: 'start'
    },
    grommetProps: {
      full: true
    }
  })
)

configure(require.context('../src', true, /\.stories\.js$/), module)
