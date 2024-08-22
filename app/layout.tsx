import type { Metadata } from 'next'

import { pretendard } from '@/lib/fonts/pretendard'
import { cn } from '@/lib/utils/cn'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://wow.enzo.kr/'),
  title: 'WoW - Class recommendation by Machine learning',
  description:
    '재미로 보는 머신러닝을 통한 와우 직업 추천 / 뉴비를 위한 유저들의 데이터. Big 5 test for selecting wow class. Wow class recommendation through machine learning for fun / by Korean user datas.',
  keywords: '심리테스트, 직업 선택, 와우, 월드 오브 워크래프트, WOW, World of warcraft, MBTI, Big five test',
  icons: { shortcut: '/favicon.ico' },
  openGraph: {
    title: 'WoW - Class recommendation by Machine learning',
    type: 'website',
    url: 'https://wow.enzo.kr',
    description:
      '재미로 보는 머신러닝을 통한 와우 직업 추천 / 뉴비를 위한 유저들의 데이터. Big 5 test for selecting wow class. Wow class recommendation through machine learning for fun / by Korean user datas.'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="[color-scheme:dark]" suppressHydrationWarning>
      <body className={cn(pretendard.className, "overflow-y-scroll bg-gray-950 bg-[url('/grid.svg')] pb-36")}>
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
          <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black p-3.5 text-gray-200 lg:p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
