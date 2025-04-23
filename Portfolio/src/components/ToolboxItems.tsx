import { twMerge } from "tailwind-merge";
import { TechIcon } from "./Technologies";

export const ToolboxItems = ({
  techStacks,
  className,
  itemsWrapperClassName,
}: {
  techStacks: { title: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-nowrap py-2 gap-4", 
          itemsWrapperClassName
        )}
      >
        {techStacks.map((item) => (
          <div
            key={item.title}
            className="flex-none inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};