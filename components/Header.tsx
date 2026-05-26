import Link from "next/link";

type Props = {

  logo: string;

};

export function Header({ logo }: Props) {

  return (

    <header className="
      sticky
      top-0
      z-50
      border-b-2
      border-orange-500
      shadow-sm
    ">

      <div className="
        w-f
        px-6
        h-24
        flex
        bg-[#ffffff]
        items-center
        justify-between
      ">

        {/* left */}
        <div className="
          flex
          items-center
          gap-4
          flex-shrink-0
        ">

          {/* logo */}
          <img
            src={logo}
            alt="logo"
            className="
              w-64
              object-contain
            "
          />



          {/* title */}
          <Link href="/">

            <div className="
              text-3xl
              md:text-4xl
              font-bold
              tracking-wide
              text-black
            ">

              千葉研究室

            </div>

          </Link>

        </div>



        {/* navigation */}
        <nav>

          <ul className="
            flex
            items-center
            gap-8
            text-sm
            md:text-base
            font-medium
          ">

            <li>

              <Link
                href="/"
                className="
                  text-gray-700
                  hover:text-orange-500
                  transition
                "
              >

                ホーム

              </Link>

            </li>



            <li>

              <Link
                href="/about"
                className="
                  text-gray-700
                  hover:text-orange-500
                  transition
                "
              >

                研究室紹介

              </Link>

            </li>



            <li>

              <Link
                href="/research"
                className="
                  text-gray-700
                  hover:text-orange-500
                  transition
                "
              >

                研究内容

              </Link>

            </li>



            <li>

              <Link
                href="/achievements"
                className="
                  text-gray-700
                  hover:text-orange-500
                  transition
                "
              >

                研究業績

              </Link>

            </li>



            <li>

              <Link
                href="/news"
                className="
                  text-gray-700
                  hover:text-orange-500
                  transition
                "
              >

                ニュース

              </Link>

            </li>



            <li>

              <Link
                href="/access"
                className="
                  text-gray-700
                  hover:text-orange-500
                  transition
                "
              >

                Access

              </Link>

            </li>



            <li>

              <Link
                href="/links"
                className="
                  text-gray-700
                  hover:text-orange-500
                  transition
                "
              >

                Links

              </Link>

            </li>

          </ul>

        </nav>

      </div>

    </header>

  );

}