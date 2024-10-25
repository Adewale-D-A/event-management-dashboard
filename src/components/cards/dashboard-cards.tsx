import ArrowUpRightIcon from "../../assets/icons/arrow-up-right";
import InfoIcon from "../../assets/icons/info";

export default function DashboardCard({
  label,
  value,
  stat,
}: {
  label: string;
  value: string | number;
  stat: {
    value: string;
    isRise: boolean;
  };
}) {
  return (
    <div className="flex flex-col gap-8 items-stretch justify-between border dark:border-none dark:bg-dark-500 dark:text-white p-4 rounded-sm hover:scale-105 cursor-pointer transition-all hover:border-primary-500">
      <div className=" flex flex-col gap-1">
        <div className=" flex items-start gap-3 text-gray-500 dark:text-white">
          <h6 className="">{label}</h6>
          <InfoIcon className=" size-4" />
        </div>
        <div className=" flex items-start gap-3">
          <h5 className=" font-bold text-3xl">{value}</h5>
          <div
            className={`${
              stat?.isRise ? " text-green-500" : " text-red-500"
            } flex items-center gap-2`}
          >
            <ArrowUpRightIcon className=" size-3" />
            <span>{stat?.value}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
