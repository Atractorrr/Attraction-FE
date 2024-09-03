import React from 'react'
import type { Preview } from '@storybook/react'
import { OverlayProvider } from '../src'

import '../src/token/index.scss'
import '../src/components/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <OverlayProvider>
        <Story {...context} />
      </OverlayProvider>
    ),
  ],
}

export default preview
