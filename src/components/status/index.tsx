import DotIcon from "../../assets/icons/dot";

export default function Status({ status }: { status: string | undefined }) {
  return (
    <div className=" text-xs whitespace-nowrap text-white">
      {status?.toLocaleLowerCase().includes("in") ||
      status?.toLocaleLowerCase().includes("cancel") ? (
        <span className=" p-1 px-3 bg-primary-500 dark:bg-transparent  dark:border dark:border-primary md:bg-primary/15 md:text-primary rounded-full flex items-center gap-2 w-fit">
          <DotIcon className="" />
          {status}
        </span>
      ) : status?.toLocaleLowerCase().includes("confirmed") ||
        status?.toLocaleLowerCase().includes("ailable") ||
        status?.toLocaleLowerCase().includes("resolved") ||
        status?.toLocaleLowerCase().includes("complete") ? (
        <span className=" p-1 px-3 bg-green-500 dark:bg-transparent dark:border dark:border-green-500 md:bg-green-500/15 md:text-green-500 rounded-full flex items-center gap-2 w-fit">
          <DotIcon className="" />
          {status}
        </span>
      ) : (
        <span className=" p-1 px-3 bg-yellow-500 dark:bg-transparent  dark:border dark:border-yellow-500 md:bg-yellow-500/15 md:text-yellow-500 rounded-full flex items-center gap-2 w-fit">
          <DotIcon className="" />
          {status}
        </span>
      )}
    </div>
  );
}
