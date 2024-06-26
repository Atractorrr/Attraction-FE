import Link from 'next/link'
import { ADMIN_EMAIL, TEAM_NAME } from '../../constant'

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto w-full max-w-3xl break-keep">
      <div className="peer peer-[]:mt-8">
        <p>
          <strong className="font-medium underline">{TEAM_NAME}</strong> (이하
          &#34;회사&#34;)는 이용자의 개인정보를 소중히 다루고 있습니다. 회사는
          &#39;개인정보보호법&#39;과 &#39;정보통신망 이용촉진 및 정보 보호 등에
          관한 법률&#39; 등 모든 관련 법규를 준수하며 회원님의 개인정보가
          보호받을 수 있도록 최선을 다하고 있습니다. 개인정보 보호정책을 통해
          이용자가 제공한 개인정보가 어떠한 용도와 방식으로 이용되며, 개인정보
          보호를 위해 어떠한 방법을 통해 관리되고 있는지에 대해 알려드립니다
        </p>
        <p className="mt-4">
          회사가 이용자에게 제공하는 서비스가 수행하는 모든 활동은 정보통신망
          이용촉진 및 정보보호(이하 &#34;정보통신망법&#34;), 개인정보보호법, 등
          개인정보 보호에 관한 관련 법령 등 국내 관련 법령을 준수하며, 본
          개인정보 처리방침을 따릅니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">
          제1조 (수집 항목 및 이용 목적)
        </h4>
        <p className="mb-4">
          회사는 편리한 서비스를 제공하기 위하여 다음과 같은 목적으로 개인정보를
          수집 및 이용하고 있습니다.
        </p>
        <ul className="marker-list">
          <li>
            서비스 이용 시 수집되는 정보
            <ul>
              <li>이름(닉네임), Gmail 주소</li>
            </ul>
          </li>
          <li>
            이용 목적
            <ul>
              <li>서비스 회원 가입 및 관리</li>
              <li>원활한 이메일 관련 서비스 제공</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">제2조 (개인정보의 수집 방법)</h4>
        <p className="mb-4">
          회사는 원활한 서비스 제공을 위해 모바일 앱을 통해 다음과 같은 방법으로
          개인정보를 수집합니다.
        </p>
        <ul className="marker-list">
          <li>최초 이용 시 이름(닉네임) 설정</li>
          <li>회원 가입시 이메일 연동</li>
        </ul>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">
          제3조 (개인정보의 보유 및 이용기간)
        </h4>
        <p className="mb-4">
          회사는 법령에 따른 개인정보 보유/이용기간 또는 정보주체로부터
          개인정보를 수집 시에 동의받은 개인정보 보유/이용기간 내에서 개인정보를
          처리/보유합니다. 또한 회원 탈퇴시 지체 없이 파기합니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">
          제4조 (개인정보의 제3자 제공)
        </h4>
        <p className="mb-4">
          회사는 법령에 따른 개인정보 보유/이용기간 또는 정보주체로부터
          개인정보를 수집 시에 동의받은 개인정보 보유/이용기간 내에서 개인정보를
          처리/보유합니다. 또한 회원 탈퇴시 지체 없이 파기합니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">제5조 (개인정보의 처리 위탁)</h4>
        <p className="mb-4">
          회사는 어떠한 경우에도 이용자의 동의 없이 이용자의 정보를 외부 업체에
          위탁하지 않습니다. 향후 위탁 계약이 발생할 경우, 개인정보보호 관련
          지시 엄수, 비밀 유지, 사고 시의 책임부담, 처리 종료 후의 개인정보의
          파기 등을 명확히 규정하며, 위탁 대상자와 위탁 업무 내용에 대해
          이용자에게 통지하고 필요한 경우 사전 동의를 받도록 합니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">
          제6조 (개인정보의 파기절차 및 방법)
        </h4>
        <p className="mb-4">
          회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
          정보를 지체없이 파기합니다. 구체적인 파기절차, 파기시점, 파기방법은
          다음과 같습니다.
        </p>
        <ol className="numbering-list">
          <li>
            파기절차 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부
            방침 및 기타 관련 법령에 정한 기간동안 저장된 후 파기합니다. 동
            개인정보는 법률에 의한 경우가 아니고서는 동의 받은 보유 목적 이외의
            다른 목적으로 이용하지 않습니다.
          </li>
          <li>
            파기시점 이용자가 입력한 정보는 개인정보의 처리 목적 달성, 해당
            서비스의 폐지 및 종료 등 그 개인 정보가 불필요하게 되었을 때에 즉시
            파기됩니다.
          </li>
          <li>
            파기방법
            <ol>
              <li>
                종이에 출력된 개인정보: 분쇄기 또는 이에 준하는 방법으로
                분쇄하거나 소각
              </li>
              <li>
                전자적 파일 형태로 저장된 개인정보: 기록을 재생할 수 없는 기술적
                방법을 사용하여 삭제
              </li>
            </ol>
          </li>
        </ol>
        <p className="mt-4">
          이용자로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이
          달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
          하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
          보관장소를 달리하여 보존합니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">제7조 (개인정보 보호책임자)</h4>
        <p className="mb-4">
          회사는 이용자가 좋은 정보를 안전하게 이용할 수 있도록 최선을 다하고
          있습니다. 개인정보를 보호하는데 있어 이용자에게 고지한 사항들에 반하여
          사고가 발생할 시에 개인정보보호책임자가 모든 책임을 집니다. 그러나,
          기술적인 보완조치를 했음에도 불구하고, 해킹 등 기본적인 네트워크상의
          위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의 훼손 및 방문자가
          작성한 게시물에 의한 각종 분쟁에 관해서는 책임이 없습니다.
        </p>
        <p className="mb-4">
          개인정보 보호책임자는 다음과 같으며, 개인정보 관련 문의사항에 신속하고
          성실하게 답변해드리고 있습니다.
        </p>
        <p className="mb-2">개인정보 보호책임자</p>
        <ul className="marker-list">
          <li>성명: 강철원</li>
          <li>연락처: {ADMIN_EMAIL}</li>
        </ul>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">제8조 (고지의 의무)</h4>
        <p className="mb-4">
          본 방침은 이 정책은 공지한 날로부터 시행됩니다. 정부나 회사의 정책이
          변경됨에 따라 내용의 추가 및 삭제, 수정이 있을 수 있으며, 이 경우
          홈페이지를 통해 지체없이 공지할 것입니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">
          제9조 (Google API 서비스 사용자 데이터 정책)
        </h4>
        <p className="mb-4">
          회사는 Google API에서받은 정보를 사용하는 경우 제한적 사용 요구 사항을
          포함하여{' '}
          <Link
            href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
            target="_blank"
            className="text-blue-400 hover:underline dark:text-blue-300"
            title="페이지 이동: Google API 서비스 사용자 데이터 정책">
            Google API 서비스 사용자 데이터 정책
          </Link>
          을 준수합니다.
        </p>
      </div>
      <h3 className="mt-20 text-2xl font-bold">
        &#60;어트랙션&#62; 이용을 위한 필수 이용약관
      </h3>
      <h4 className="mt-12 text-xl font-bold">제1장 총칙</h4>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제1조 (목적)</h5>
        <p className="mb-4">
          이 이용약관(이하 &#39;약관&#39;)은{' '}
          <strong className="font-medium underline">{TEAM_NAME}</strong>(이하
          &#39;회사&#39;)와 이용 고객(이하 &#39;회원&#39;)간에 회사가 제공하는
          어트렉션 서비스(이하 &#39;서비스&#39;)의 가입조건 및 이용에 관한 제반
          사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">
          제2조 (이용약관의 효력 및 변경)
        </h5>
        <ol className="numbering-list">
          <li>
            이 약관은 서비스를 이용하고 하는 모든 회원에 대하여 그 효력을
            발생합니다.
          </li>
          <li>
            이 약관은 어트렉션 홈페이지(
            <span className="underline">{process.env.NEXT_PUBLIC_FE_URL}</span>)
            에 온라인으로 공시됨으로써 효력이 발생되고, 합리적인 사유가 발생할
            경우 회사는 관계법령에 위배되지 않는 범위에서 이 약관을 변경할 수
            있습니다.
          </li>
          <li>
            개정약관도 어트렉션 홈페이지에 온라인으로 공시됨으로써 효력이
            발생됩니다. 회사는 약관을 변경할 경우 지체 없이 이를 공시하여야
            하고, 회원의 권리나 의무 등에 관한 중요사항을 개정할 경우에는 사전에
            공시하여야 합니다.
          </li>
          <li>
            이 약관에 동의하는 것은 정기적으로 어트렉션 홈페이지를 방문하여
            약관의 변경사항을 확인하는 것에 동의함을 의미합니다. 변경된 약관을
            알지 못해 발생하는 이용자의 피해는 회사에서 책임지지 않습니다.
          </li>
          <li>
            약관에 동의하지 않는 회원은 탈퇴(해지)를 요청할 수 있으며, 약관의
            효력이 발생된 날로부터 7일 이후까지 거부의사를 표시하지 아니하고
            서비스를 계속 사용할 경우는 약관에 동의한 것으로 간주됩니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제3조 (약관과 기타 준칙)</h5>
        <p className="mb-4">
          이 약관에 명시되지 아니한 사항과 이 약관의 해석에 관해서는 서비스 별
          약관의 취지, 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진 및
          정보보호 등에 관한 법률, 청소년보호법, 콘텐츠 산업진흥법 , 전자상거래
          등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률,
          지식경제부장관(전 정보통신부장관)이 정하는 디지털 콘텐츠
          이용자보호지침, 기타 대한민국의 관련 법령 규정에 따릅니다.
        </p>
      </div>
      <h4 className="mt-12 text-xl font-bold">제2장 이용계약 체결</h4>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">
          제4조 (서비스 이용 계약의 성립)
        </h5>
        <ol className="numbering-list">
          <li>
            이용계약은 이용고객의 본 약관에 대한 동의와 이용신청에 대하여 회사가
            이용승낙을 함으로써 성립합니다.
          </li>
          <li>
            본 이용약관에 대한 동의는 이용신청 시 해당 어트렉션 앱의
            &#39;동의하고 시작하기&#39; 버튼을 누름으로써 성립합니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제5조 (서비스 이용)</h5>
        <ol className="numbering-list">
          <li>
            회원으로 가입하여 본 서비스를 이용하고자 하는 자는 회사에서 요청하는
            정보(이름, 이메일 등)를 제공하여야 합니다.
          </li>
          <li>
            회원가입 후 이름 정보 입력은 실명 혹은 가명 사용이 가능합니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">
          제6조 (서비스의 제공 및 변경)
        </h5>
        <ol className="numbering-list">
          <li>
            회사는 회원에게 아래와 같은 서비스를 제공합니다.
            <ol>
              <li>뉴스레터 열람 서비스</li>
              <li>뉴스레터 구독 목록 관리 서비스</li>
              <li>뉴스레터 검색 및 추천 서비스</li>
              <li>
                기타 회사가 자체 개발하거나 다른 회사와의 협력을 통해 회원들에게
                제공할 일체의 서비스
              </li>
            </ol>
          </li>
          <li>
            회사는 변경될 서비스의 내용 및 제공일자를 홈페이지를 통해 공지하고
            서비스를 변경하여 제공할 수 있습니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">
          제7조 (개인정보의 보호 및 사용)
        </h5>
        <ol className="numbering-list">
          <li>회사는 고객의 개인정보를 보호하고 존중합니다.</li>
          <li>
            회사는 이용신청 시 고객이 제공하는 정보, 각종 이벤트 참가를 위하여
            고객이 제공하는 정보, 기타 서비스 이용 과정에서 수집되는 정보 등을
            통해 고객에 관한 정보를 수집하며, 수집된 고객의 정보는 본 이용계약의
            이행과 본 이용계약상의 서비스 제공을 위한 목적으로 사용됩니다.
          </li>
          <li>
            회사는 서비스 제공과 관련하여 취득한 고객의 신상정보를 본인의 승낙
            없이 제3자에게 누설할 수 없습니다. 다만, 다음의 각 호의 경우에는
            그러하지 아니합니다.
            <ol>
              <li>서비스의 제공에 따른 요금 정산을 위하여 필요한 경우</li>
              <li>
                통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정
                개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우
              </li>
              <li>
                관계 법령에 의하여 수사상 목적으로 정해진 절차와 방법에 따라
                관계기관의 요구가 있는 경우
              </li>
              <li>다른 법률에 특별한 규정이 있는 경우</li>
              <li>방송통신심의위원회가 관계법령에 의하여 요청 경우</li>
              <li>
                회원에게 보다 전문적이고 다양한 서비스를 제공하기 위한 경우
              </li>
            </ol>
          </li>
          <li>
            회사는 회원에게 제3항의 전문적이고 다양한 서비스를 제공하기 위해
            자체적으로 TM을 하거나, 외부전문 사업자와 제휴하여 공동으로
            서비스(TM, SMS, 메일 등 광고성 정보 발송)를 제공할 수 있습니다.
            <br />
            <br />
            전문적인 지식, 경험과 상담이 요구되는 서비스의 경우 회원의 동의를
            받아 외부전문사업자와 공동으로 서비스를 제공하며 이때
            해당전문사업자의 상호와 공유목적, 공유 정보를 명시합니다.
            <br />
            <br />
            외부전문사업자와의 공동서비스를 제공함에 있어 회원의 성명, 연락처 등
            공동서비스에 필요한 최소한의 정보가 공유될 수 있고, 공유되는 정보는
            아래 각호와 같이 엄격히 보호 관리됩니다.
            <ol>
              <li>
                공유되는 정보는 해당 전문서비스 이외 어떠한 다른 용도로도 사용
                되지 않습니다.
              </li>
              <li>
                서비스 제공 과정에서 해당 전문서비스에 대해 회원이 동의의사를
                밝히지 않거나 사전에 거부의사를 밝힐 경우 최소한의 정보도 전문
                사업자와 공유하지 않습니다.
              </li>
            </ol>
          </li>
          <li>
            제4항의 개인정보 이용에 관한 회원의 동의는 본 약관에 동의하는 것으로
            갈음할 수 있습니다.
          </li>
          <li>
            회원은 언제든 원할 경우 회사에 제공한 개인정보의 수집과 이용에 관한
            동의를 철회할 수 있고, 위 동의의 철회는 해지 신청을 하는 것으로
            이루어 집니다.
          </li>
          <li>
            서비스의 사용 및 Google API에서받은 정보의 다른 앱으로의 전송 은
            제한 사용 요구 사항을 포함하여{' '}
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
              target="_blank"
              className="text-blue-400 hover:underline dark:text-blue-300"
              title="페이지 이동: Google API 서비스 사용자 데이터 정책">
              Google API 서비스 사용자 데이터 정책
            </Link>
            을 준수합니다.
          </li>
          <li>
            개인정보보호와 관련된 보다 자세한 사항은 개인정보취급방침을
            참조하시기바랍니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">
          제8조 (이용 신청의 승낙과 제한)
        </h5>
        <ol className="numbering-list">
          <li>
            회사는 제6조의 규정에 의한 이용신청고객에 대하여 업무 수행상 또는
            기술상 지장이 없는 경우 원칙적으로 접수순서에 따라 서비스 이용을
            승낙합니다.
          </li>
          <li>
            회사는 아래사항에 해당할 경우 이용 승낙하지 않을 수 있습니다.
            <ol>
              <li>이용계약 신청서의 내용을 허위로 기재한 경우</li>
              <li>부정한 용도로 본 서비스를 이용하고자 하는 경우</li>
              <li>영리를 추구할 목적으로 본 서비스를 이용하고자 하는 경우</li>
              <li>본 서비스와 경쟁관계에 있는 이용자가 신청하는 경우</li>
              <li>회사의 서비스 제공에 피해를 끼칠 수 있다고 판단 되는 경우</li>
              <li>기타 규정한 제반 사항을 위반하며 신청하는 경우</li>
            </ol>
          </li>
          <li>
            회사는 서비스 이용신청이 다음 각 호에 해당하는 경우에는 그 신청에
            대하여 승낙 제한사유가 해소될 때까지 승낙을 유보할 수 있습니다.
            <ol>
              <li>회사가 설비의 여유가 없는 경우</li>
              <li>회사의 기술상 지장이 있는 경우</li>
              <li>기타 이용승낙이 곤란한 사유가 있는 경우</li>
            </ol>
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">
          제9조 (회원번호 부여 및 변경 등)
        </h5>
        <ol className="numbering-list">
          <li>
            회사는 이용자에 대하여 이 약관에서 정하는 바에 따라 회원번호를
            부여하며, 회원번호에 관한 모든 관리 책임은 게임이용자에게 있습니다.
          </li>
          <li>
            회원번호는 이용자의 이메일을 기반으로 설정되어 원칙적으로 변경이
            불가하며 부득이한 사유로 인하여 변경하고자 할 경우에는 해당
            회원번호를 를 해지하고 재가입해야 합니다.
          </li>
          <li>
            회원번호의 관리책임은 이용자에게 있고, 그 관리책임을 다하지 않아
            발생하는 서비스 이용상의 손해나 제3자에 의한 부정이용 등의 책임은
            전적으로 이용자가 부담하여야 합니다.
          </li>
          <li>
            기타 이용자 개인정보 관리 및 변경 등에 관한 사항은 서비스별 안내에
            정하는 바에 따릅니다.
          </li>
        </ol>
      </div>
      <h4 className="mt-12 text-xl font-bold">제3장 계약 당사자의 의무</h4>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제10조 (회사의 의무)</h5>
        <ol className="numbering-list">
          <li>
            회사는 특별한 사정이 없는 한 회원이 희망한 서비스 이용 개시일에
            서비스를 제공하고 계속적이고 안정적으로 서비스를 제공해야 합니다.
          </li>
          <li>
            회사는 개인정보 보호를 위한 보안시스템을 구축하고 개인정보취급방침을
            공시하고 준수합니다.
          </li>
          <li>
            회사는 이용고객으로부터 제기되는 의견이나 불만이 정당하다고 인정될
            경우 적절한 조치를 취해야 하고, 즉시 처리하기 곤란한 경우에는
            이용자에게 그 사유와 처리일정을 통보해야 합니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제11조 (이용자의 의무)</h5>
        <ol className="numbering-list">
          <li>
            이용자는 회원가입신청이나 회원정보변경 시 모든 사항을 사실에 근거해
            작성하여야 하며, 허위 또는 타인의 정보를 이용하여 등록할 경우에는
            회원으로서의 일체의 권리를 주장할 수 없습니다.
          </li>
          <li>
            회원은 본 약관과 관계법령 등 제반 규정 및 회사의 공지사항을
            준수하여야 하며, 회사의 업무를 방해하거나 회사의 명예를 손상시키는
            행위를 해서는 안됩니다.
          </li>
          <li>
            회원은 회사의 사전 승낙 없이 서비스를 이용하여 영업활동을 할 수
            없으며, 회사는 그 영업활동에 대한 책임을 부담하지 않습니다. 또한
            회원은 위와 같은 영업활동으로 회사에 손해를 입힐 경우 손해배상책임을
            부담합니다.
          </li>
          <li>
            회원은 회사의 명시적 동의가 없는 한 서비스의 이용권한, 기타
            이용계약상의 지위를 타인에게 양도, 증여, 담보제공 할 수 없습니다.
          </li>
          <li>회원은 회사 및 제 3자의 지적재산권을 침해해서는 안됩니다.</li>
          <li>
            회사는 회원이 다음 각 호의 행위를 할 경우 당해 회원의 서비스
            이용제한 등 적절한 제한조치를 할 수 있습니다.
            <ol>
              <li>다른 이용자의 이메일을 도용하는 행위</li>
              <li>회사의 운영진, 직원 또는 관계자를 사칭하는 행위</li>
              <li>
                회사로부터 특별한 권리를 부여 받지 않고 회사의 클라이언트
                프로그램을 변경하거나, 회사의 서버를 해킹하거나, 웹사이트 또는
                게시된 정보의 일부분 또는 전체를 임의로 변경하는 행위
              </li>
              <li>서비스에 위해를 가하거나 고의로 방해하는 행위</li>
              <li>
                본 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 서비스 이용
                외의 목적으로 복제하거나, 이를 출판 및 방송 등에 사용하거나, 제
                3자에게 제공하는 행위
              </li>
              <li>
                모욕적이거나 개인신상에 대한 내용이어서 타인의 명예나
                프라이버시를 침해할 수 있는 내용을 전송, 게시, 전자우편 또는
                기타의 방법으로 타인에게 유포하는 행위
              </li>
              <li>
                회사의 승인을 받지 않고 다른 사용자의 개인정보를 수집 또는
                저장하는 행위
              </li>
              <li>범죄와 결부된다고 객관적으로 판단되는 행위</li>
              <li>
                본 약관을 포함하여 기타 회사가 정한 제반 규정 또는 이용 조건을
                위반하는 행위
              </li>
              <li>기타 관계법령에 위배되는 행위</li>
            </ol>
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제12조 (서비스 이용 시간)</h5>
        <ol className="numbering-list">
          <li>
            서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한
            연중무휴, 1일 24시간 운영을 원칙으로 합니다. 다만, 시스템 정기점검,
            설비 증설 및 교체를 위해 필요할 경우에는 서비스를 일시 중단할 수
            있고, 예정된 작업으로 인한 서비스 일시 중단은 사전에 공지합니다.
          </li>
          <li>
            회사는 긴급한 시스템 점검 등 부득이한 사유가 있을 경우에는 예고 없이
            서비스를 일시 중단할 수 있으며, 기존 서비스를 새로운 서비스로
            변경하거나 교체할 필요가 있을 경우에는 제공되는 서비스를 완전히
            중단할 수 있습니다.
          </li>
          <li>
            회사는 국가비상사태, 정전, 설비의 장애 또는 서비스 이용의 폭주
            등으로 인하여 정상적인 서비스를 제공하기 곤란할 경우 서비스의 전부
            또는 일부를 제한하거나 중단할 수 있습니다. 다만 이 경우 그 사유 및
            기간 등을 회원에게 사전 또는 사후에 공지합니다.
          </li>
          <li>
            회사는 회사가 통제할 수 없는 사유로 인한 서비스 중단, 시스템 다운,
            시스템관리자의 고의나 과실이 없는 디스크장애, 타인(PC통신회사,
            기간통신사업자 등)에 의한 시스템 중단 등 사전통지가 곤란한 경우
            통지를 생략할 수 있습니다.
          </li>
          <li>
            회사는 서비스를 특정범위로 분할하여 각 범위 별로 이용가능시간을
            별도로 지정할 수 있습니다. 다만 이 경우 그 내용을 공지합니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제13조 (이용자 이메일 관리)</h5>
        <ol className="numbering-list">
          <li>
            회사는 서비스를 운영함에 있어 각종 정보를 서비스 화면에 게재하거나
            전자우편이나 서신우편 등의 방법으로 회원에게 제공할 수 있습니다.
          </li>
          <li>
            회사는 서비스 개선 및 회원 대상의 서비스 소개 등의 목적으로 회원의
            동의 하에 추가적인 개인 정보를 요구할 수 있습니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제14조 (정보의 제공)</h5>
        <ol className="numbering-list">
          <li>
            현재 회사는 서비스 화면, 전자우편 등에 광고를 게재할 수 있고, 회원은
            서비스 이용 시 노출되는 광고게재에 동의합니다.
          </li>
          <li>
            회원이 서비스상에 게재되어 있는 광고를 이용하거나 서비스를 통한
            광고주의 판촉활동에 참여하는 등의 방법으로 교신 또는 거래를 하는
            것은 전적으로 회원과 광고주 간의 문제이므로 이로 인해 발생하는
            손실과 손해에 대해 회사는 어떠한 책임도 지지 않습니다.
          </li>
        </ol>
      </div>
      <h4 className="mt-12 text-xl font-bold">제4장 계약 해지 및 이용 제한</h4>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제16조 (계약 변경 및 해지)</h5>
        <p className="mb-4">
          회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 어트랙션
          홈페이지에서 설정-회원탈퇴 메뉴를 이용해 가입 해지를 해야 합니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제17조 (서비스 이용제한)</h5>
        <ol className="numbering-list">
          <li>
            회사는 회원이 서비스 이용내용에 있어서 본 약관 제 11조 내용을
            위반하거나, 다음 각 호에 해당하는 경우 서비스 이용을 제한할 수
            있습니다.
            <ol>
              <li>
                방송통신심의위원회 등 관련 공공기관의 시정 요구가 있는 경우
              </li>
              <li>불법 홈페이지인 경우</li>
              <li>기타 정상적인 서비스운영에 방해가 될 경우</li>
            </ol>
          </li>
          <li>
            상기 이용제한 규정에 따라 서비스를 이용하는 회원에게 서비스 이용에
            대하여 별도 공지 없이 서비스 이용의 일시 정지, 초기화, 이용계약 해지
            등을 불량이용자 처리규정에 따라 취할 수 있습니다.
          </li>
        </ol>
      </div>
      <h4 className="mt-12 text-xl font-bold">제5장 손해배상 및 기타사항</h4>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제18조 (손해배상)</h5>
        <p className="mb-4">
          회사가 제공하는 서비스로 인하여 회원에게 손해가 발생하는 경우 회사는
          그 손해가 회사의 고의 또는 중과실에 의한 경우에 한하여 통상손해의
          범위에서 손해배상책임을 부담합니다.
        </p>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제19조 (면책조항)</h5>
        <ol className="numbering-list">
          <li>
            회사는 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여
            서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이
            면제됩니다.
          </li>
          <li>
            회사는 기간통신 사업자가 전기통신 서비스를 중지하거나 정상적으로
            제공하지 아니하여 손해가 발생한 경우 책임이 면제됩니다.
          </li>
          <li>
            회사는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로
            발생한 손해에 대한 책임이 면제됩니다.
          </li>
          <li>
            회사는 회원의 귀책사유로 인한 서비스 이용의 장애 또는 손해에 대하여
            책임을 지지 않습니다.
          </li>
          <li>
            회사는 이용자의 컴퓨터 오류에 의해 손해가 발생한 경우, 또는 회원이
            신상정보 및 전자우편 주소를 부실하게 기재하여 손해가 발생한 경우
            책임을 지지 않습니다.
          </li>
          <li>
            회사는 회원이 서비스를 이용하여 기대하는 수익을 얻지 못하거나 상실한
            것에 대하여 책임을 지지 않습니다.
          </li>
          <li>
            회사는 회원이 서비스를 이용하면서 얻은 자료로 인한 손해에 대하여
            책임을 지지 않습니다. 또한 회사는 회원이 서비스를 이용하며 타
            회원으로 인해 입게 되는 정신적 피해에 대하여 보상할 책임을 지지
            않습니다.
          </li>
          <li>
            회사는 회원이 서비스에 게재한 각종 정보, 자료, 사실의 신뢰도, 정확성
            등 내용에 대하여 책임을 지지 않습니다.
          </li>
          <li>
            회사는 이용자 상호간 및 이용자와 제 3자 상호 간에 서비스를 매개로
            발생한 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해를 배상할
            책임도 없습니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h5 className="mb-2 text-lg font-bold">제20조 (재판권 및 준거법)</h5>
        <ol className="numbering-list">
          <li>
            이 약관에 명시되지 않은 사항은 전기통신사업법 등 관계법령과 상관습에
            따릅니다.
          </li>
          <li>
            회사의 정액 서비스 회원 및 기타 유료 서비스 이용 회원의 경우 회사가
            별도로 정한 약관 및 정책에 따릅니다.
          </li>
          <li>
            서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 회사의 본사
            소재지를 관할하는 법원을 관할 법원으로 합니다.
          </li>
        </ol>
      </div>
      <div className="peer peer-[]:mt-8">
        <h4 className="mb-2 text-lg font-bold">[부칙]</h4>
        <p>
          (시행일) 본 약관은{' '}
          <strong className="font-medium underline">2024년 06월 06일</strong>
          부터 적용됩니다
        </p>
      </div>
    </div>
  )
}
