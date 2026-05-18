import { MemberCard } from "@/components/member/MemberCard";


type Member = {

  job: string;

  name: string;

  image: string;

  hobby: string;

  message: string;

};



type Props = {

  members: Member[];

};



export function MembersSection({
  members,
}: Props) {

  return (

    <section className="
      max-w-7xl
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

        Members

      </h2>



      {/* members */}
      <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-10
      ">

        {members.map(member => (

          <MemberCard
            key={member.name}
            member={member}
          />

        ))}

      </div>

    </section>

  );

}