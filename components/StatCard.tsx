import Image from "next/image";

type StatCardProps = {
  count: number;
  label: string;
  icon: string;
};

export const StatCard = ({ count = 0, label, icon }: StatCardProps) => {
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-2xl bg-cover p-6 shadow-lg" >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt="appointments"
          className="size-8 w-fit" />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>

      <p className="text-14-regular">{label}</p>
    </div>
  );
};