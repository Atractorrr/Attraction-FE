const template = ({ componentName, exports, props, jsx }, { tpl }) => {
  props[0].name = '(props: SVGProps<SVGSVGElement>)'

  return tpl`
    import React, { SVGProps } from 'react';
    const ${componentName} = ${props} => (${jsx});
    ${exports}
    `
}

module.exports = template
