import { PapersSection } from "@/components/achievement/PapersSection";
import { papers } from "@/data/achievement/papers";

import { ConferenceSection } from "@/components/achievement/ConferencesSection";
import { conferences } from "@/data/achievement/conferences";

import { AwardSection } from "@/components/achievement/AwardsSection";
import { awards } from "@/data/achievement/awards";



export default function
AchievementPage() {

  return (

    <main>

      <PapersSection
        papers={papers}
      />

      <ConferenceSection
        conferences={conferences}
      />

      <AwardSection
        awards={awards}
      />

    </main>

  );

}