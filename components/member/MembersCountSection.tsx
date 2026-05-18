import Link from "next/link";



type MemberCounts = {

  Professor?: number;

  Doctor?: number;

  M2?: number;

  M1?: number;

  B4?: number;

};



type Props = {

  title: string;

  count: MemberCounts;

};



export function
MembersCountSection({
  title,
  count,
}: Props) {

  return (

    <section className="
      max-w-5xl
      mx-auto
      px-6
      py-28
    ">

      {/* title */}
      <h2 className="
        text-4xl
        md:text-5xl
        font-bold
        text-center
        mb-16
      ">

        {title}

      </h2>



      {/* counts */}
      <div className="
        grid
        grid-cols-2
        md:grid-cols-5
        gap-6
        mb-16
      ">

        {/* Professor */}
        <CountCard
          label="Professor"
          value={count.Professor ?? 0}
        />



        {/* Doctor */}
        <CountCard
          label="Doctor"
          value={count.Doctor ?? 0}
        />



        {/* M2 */}
        <CountCard
          label="M2"
          value={count.M2 ?? 0}
        />



        {/* M1 */}
        <CountCard
          label="M1"
          value={count.M1 ?? 0}
        />



        {/* B4 */}
        <CountCard
          label="B4"
          value={count.B4 ?? 0}
        />

      </div>



      {/* button */}
      <div className="text-center">

        <Link
          href="/members"
          className="
            inline-block
            px-8
            py-4
            rounded-full
            bg-black
            text-white
            text-lg
            hover:bg-gray-800
            transition
          "
        >

          メンバー一覧を見る

        </Link>

      </div>

    </section>

  );

}



/* =========================
   count card
========================= */

type CountCardProps = {

  label: string;

  value: number;

};



function CountCard({
  label,
  value,
}: CountCardProps) {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-md
      p-8
      text-center
      hover:shadow-xl
      transition
    ">

      {/* label */}
      <div className="
        text-gray-500
        text-sm
        mb-4
      ">

        {label}

      </div>



      {/* value */}
      <div className="
        text-5xl
        font-bold
      ">

        {value}

      </div>

    </div>

  );

}