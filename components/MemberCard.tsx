type Props = {

  member: {
    job: string;
    name: string;
    image: string;
    hobby: string;
    message: string;
  };

};

export function MemberCard({ member }: Props) {

  return (

    <div className="member-card">

      <img
        src={member.image}
        alt={member.name}
      />

      <h2>名前: {member.name}</h2>

      <p>職業: {member.job}</p>

      <p>趣味: {member.hobby}</p>

      <p>一言: {member.message}</p>

    </div>

  );

}