const template = ({ componentName, props, jsx }, { tpl }) => {
  // eslint-disable-next-line no-param-reassign
  props[0].name = 'props: SVGProps<SVGSVGElement>'

  return tpl`
    import React, { SVGProps } from 'react'

    export default function ${componentName}(${props}) {
      return (${jsx})
    }
    `
}

module.exports = template
