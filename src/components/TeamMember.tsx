import { ApiProps } from "@/types/member";
import Image from "next/image";

const TeamMember: React.FC<ApiProps> = ({ api }) => {
  return (
    <>
      {api.map((member, index) => {
        return (
          <div
            key={index}
            className="flex flex-col w-full max-w-full justify-center items-center gap-4"
          >
            <div className="relative w-full max-w-full aspect-[1/1] rounded-full overflow-hidden">
              <Image
                src={member.picture.large}
                alt="member pic"
                fill
                style={{ objectFit: "cover" }}
                sizes="100%"
                priority={false}
              />
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <p className="font-bold">
                {member.name.first} {member.name.last}
              </p>
              <p className="text-[12px] text-[#7F7F7F]">Chef Extraordinaire</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamMember;
