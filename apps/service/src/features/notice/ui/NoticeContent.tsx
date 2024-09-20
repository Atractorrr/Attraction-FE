'use client'

import { Badge } from '@attraction/design-system'

export default function NoticeContent() {
  return (
    <div className="py-6">
      <ul className="*:border-y *:border-gray-100 ">
        <li className="border-y border-gray-100 px-2 py-4 first:border-b-0 last:border-t-0">
          <div className="mb-3 space-x-2">
            <Badge variant="green">공지사항</Badge>
            <Badge variant="green">공지사항</Badge>
            <Badge variant="green">공지사항</Badge>
          </div>
          <p className="mb-4">아 디자인 ㅈㄴ 하기 싫다아ㅏㅏㅏ</p>
          <p>2000.03.03.</p>
        </li>
        <li className="border-y border-gray-100 px-2 py-4 first:border-b-0 last:border-t-0">
          <div className="mb-3 space-x-2">
            <Badge variant="green">공지사항</Badge>
            <Badge variant="green">공지사항</Badge>
            <Badge variant="green">공지사항</Badge>
          </div>
          <p className="mb-4">아 디자인 ㅈㄴ 하기 싫다아ㅏㅏㅏ</p>
          <p>2000.03.03.</p>
        </li>
        <li className="border-y border-gray-100 px-2 py-4 first:border-b-0 last:border-t-0">
          <div className="mb-3 space-x-2">
            <Badge variant="green">공지사항</Badge>
            <Badge variant="green">공지사항</Badge>
            <Badge variant="green">공지사항</Badge>
          </div>
          <p className="mb-4">아 디자인 ㅈㄴ 하기 싫다아ㅏㅏㅏ</p>
          <p>2000.03.03.</p>
        </li>
      </ul>

      {/* <table className="w-full border-y border-gray-100">
        <colgroup>
          <col width="0%" />
          <col width="0%" />
          <col width="70%" />
          <col width="0%" />
        </colgroup>
        <thead>
          <tr className="*:p-2 *:font-medium">
            <th>글 번호</th>
            <th>카테고리</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="*:p-3">
            <td>149</td>
            <td>
              <Badge variant="green">공지사항</Badge>
            </td>
            <td className="max-w-0 truncate">
              Veniam officia dolore deserunt sunt ea id cillum sunt qui qui
              quis. Magna elit ex occaecat irure sit aute aliqua sint est velit
              quis nisi non sint. Do aute in ad exercitation. Officia aliquip id
              elit do. Et officia non ipsum consectetur.
            </td>
            <td>2024.01.30</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
}
