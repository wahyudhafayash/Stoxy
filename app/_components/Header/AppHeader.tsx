import { FaBoxesStacked } from "react-icons/fa6";
import ModeToggle from "./ModeToggle";

const AppHeader = () => {
  return (
    <div className="p-2 flex justify-between items-center">
      <AppLogo />
      <ModeToggle />
    </div>
  );
};

const AppLogo = () => {
  return (
    <div className="flex items-center gap-2 transition-all">
      <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <FaBoxesStacked className="text-xl" />
      </div>

      <div className="flex items-center gap-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold text-[24px]">Stoxy</span>
      </div>
    </div>
  );
};

export default AppHeader;
