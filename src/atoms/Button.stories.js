import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button } from 'grommet'

export default {
  title: 'Button',
  component: Button
}

export const Text = () => <Button label='Hello Button' />

export const Emoji = () => <Button label='😀 😎 👍 💯' />
