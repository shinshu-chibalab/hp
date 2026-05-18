import { MembersSection } from "@/components/member/MembersSection";

import { members } from "@/data/members";

export default function MembersPage() {

  return (

    <MembersSection
      members={members}
    />

  );

}