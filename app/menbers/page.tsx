import { MemberCard } from "@/components/MemberCard";

import { members } from "@/data/members";

export default function MembersPage() {

  return (

    <div className="grid">

      {members.map(member => (

        <MemberCard
          key={member.name}
          member={member}
        />

      ))}

    </div>

  );

}