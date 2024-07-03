import parse, {
  HTMLReactParserOptions,
  domToReact,
  Element,
  DOMNode,
  attributesToProps,
} from 'html-react-parser'
import { UNSUBSCRIBE_REGEX } from '@/shared/constant'

interface ArticlePageProps {
  params: { file: string }
}

function extractTextContent(children: any[]): string {
  return children
    .map((child: any) => {
      if (child.type === 'text') {
        return child.data
      }
      if (child.children) {
        return extractTextContent(child.children)
      }
      return ''
    })
    .join('')
}

const parseOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (!(domNode instanceof Element && domNode.attribs)) return undefined
    const { name, children } = domNode

    if (name !== 'a') return undefined
    const textContent = extractTextContent(children)

    if (!UNSUBSCRIBE_REGEX.test(textContent)) return undefined
    const props = attributesToProps(domNode.attribs)

    return (
      <a href="#none" data-censored="true" style={props.style}>
        {domToReact(children as DOMNode[])}
      </a>
    )
  },
}

export const revalidate = 300

export default async function ArticlePage({ params }: ArticlePageProps) {
  if (!/.html$/g.test(params.file)) {
    throw new Error('잘못된 접근이에요')
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/article/${params.file}`,
  )

  if (!res.ok) {
    throw new Error('아티클을 불러오는데 실패했어요')
  }

  const html = await res.text()

  return parse(
    html
      .replace(/<html\b|<body\b/g, '<div')
      .replace(/<\/html>|<\/body>/g, '</div>'),
    parseOptions,
  )
}
