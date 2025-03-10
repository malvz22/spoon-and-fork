import { getRandomUserData } from "@/lib/api";
import TeamMember from "./TeamMember";

const TeamMemberList: React.FC = async () => {
  const randomUser = await getRandomUserData();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      <TeamMember api={randomUser} />
    </div>
  );
};

export default TeamMemberList;
