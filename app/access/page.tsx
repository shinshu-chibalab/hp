import { AccessInfo }
  from "@/components/AccessInfo";

import { ContactInfo }
  from "@/components/ContactInfo";

import { GoogleMap }
  from "@/components/GoogleMap";

export default function AccessPage() {

  return (

    <div className="
      max-w-5xl
      mx-auto
      px-6
      py-12
    ">

      <h1 className="
        text-5xl
        font-bold
        mb-12
      ">

        Access & Contact

      </h1>

      <GoogleMap />

      <AccessInfo 
        postCode="380-8553"
        address="長野県長野市若里 4-17-1"
        building="E3棟 307"
        tel="00-0000-0000"
      />

      <ContactInfo 
        title="研究に関するお問い合わせ" 
        email="chiba_lab_members-ml@shinshu-u.ac.jp" 
        memo="研究室見学希望の方は，上記メールアドレスまでご連絡ください．"
      />

    </div>

  );

}