import Link from "next/link";

export function Header() {

  return (

    <header className="shadow-md">

      {/* 上部分 */}
      <div className="px-8 py-6 bg-white">

        <div className="text-3xl font-bold tracking-wide">

          千葉研究室

        </div>

      </div>

      {/* ナビゲーション */}
      <nav className="bg-slate-800 text-white">

        <ul className="flex justify-center gap-10 py-4 text-sm md:text-base">

          <li>
            <Link href="/">
              ホーム
            </Link>
          </li>

          <li>
            <Link href="/about">
              研究室紹介
            </Link>
          </li>

          <li>
            <Link href="/publications">
              研究業績
            </Link>
          </li>

          <li>
            <Link href="/members">
              メンバー紹介
            </Link>
          </li>

          <li>
            <Link href="/news">
              ニュース
            </Link>
          </li>

          <li>
            <Link href="/access">
              アクセス＆コンタクト
            </Link>
          </li>

        </ul>

      </nav>

    </header>

  );

}