import Image from 'next/image'
import Link from 'next/link'

import { Boundary } from '@/components/atoms/boundary'

export default function Page() {
  return (
    <>
      <Image src="/logo-small.png" alt="WOW Logo" className="mx-auto my-3" width="40" height="40" />
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <Boundary>
          <h2 className="text-yellow-500">성향 테스트 + 직업 선택</h2>
          <h4 className="text-yellow-200">BIG 5 테스트란 ?</h4>
          <p className="indent-2 text-sm">
            인간의 성격을 5가지 요인들로 설명하는 성격심리 모형.
            <br />
            학계에서 논의된 5요인 모형을 기반으로 한다.
            <br />
            성격심리학자들에게 신뢰를 받고 있는 검증된 이론이다.
          </p>
          <a
            href="https://namu.wiki/w/Big5"
            title="[나무위키] Big 5"
            target={'_blank'}
            className="user-select-none hover:text-main-200 cursor-pointer px-1 py-3 text-center text-xs"
          >
            자세히
          </a>
        </Boundary>

        <Boundary>
          <Image src={'/logo.png'} alt={'WOW LOGO'} width="380" height="150" />
          <h5 className="text-yellow-100">월드 오브 워크래프트에 처음입니까 ?</h5>
          <div className="flex w-full items-center justify-center gap-10">
            <Link href="/testing">
              <button type="button">예</button>
            </Link>
            <Link href="/selecting">
              <button type="button">아니오</button>
            </Link>
          </div>
        </Boundary>
      </div>
    </>
  )
}
