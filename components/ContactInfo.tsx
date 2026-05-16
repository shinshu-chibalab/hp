type Props = {

  title: string;

  email: string;

  memo: string;

};

export function ContactInfo({
  title,
  email,
  memo,
}: Props) {

  return (

    <section>

      <h2 className="
        text-3xl
        font-bold
        mb-6
      ">

        Contact

      </h2>

      <div className="
        bg-white
        rounded-2xl
        shadow-md
        p-8
        leading-8
      ">

        {/* タイトル */}
        <p className="
          text-lg
          font-semibold
          mb-4
        ">

          {title}

        </p>

        {/* メールアドレス */}
        <a
          href={`mailto:${email}`}
          className="
            text-blue-600
            hover:underline
            break-all
          "
        >

          {email}

        </a>

        {/* メモ */}
        <p className="
          mt-8
          text-gray-700
        ">

          {memo}

        </p>

      </div>

    </section>

  );

}