type Props = {

  title: string;

  postCode: string;

  address: string;

  building: string;

  tel: string;

};

export function AccessInfo({
  title,
  postCode,
  address,
  building,
  tel,
}: Props) {

  return (

    <section className="mb-16">

      <h2 className="
        text-3xl
        font-bold
        mb-6
      ">

        {title}

      </h2>

      <div className="
        bg-white
        rounded-2xl
        shadow-md
        p-8
        leading-8
      ">

        <p>
          〒{postCode}
        </p>

        <p>
          {address}
        </p>

        <p>
          {building}
        </p>

        <p className="mt-6">
          TEL: {tel}
        </p>

      </div>

    </section>

  );

}