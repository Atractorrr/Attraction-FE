'use client'

import { Badge } from '@attraction/design-system/dist'

export default function TestPage() {
  return (
    <div>
      <Badge variant="active">active</Badge>
      <Badge>default</Badge>
      <Badge variant="red">red</Badge>
      <Badge>default</Badge>
      <Badge variant="yellow">yellow</Badge>
      <Badge>default</Badge>
      <Badge variant="green">green</Badge>
      <Badge>default</Badge>
      <Badge variant="blue">blue</Badge>
    </div>
  )
}
