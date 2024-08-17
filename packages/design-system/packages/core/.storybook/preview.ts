import type { Preview } from '@storybook/react'

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
}

export default preview
