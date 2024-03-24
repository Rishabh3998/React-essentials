import { ReactNode } from "react";

const TabButton = ({
  children,
  handleClick,
  isActive,
}: {
  children: ReactNode;
  handleClick: () => void;
  isActive: boolean;
}) => {
  return (
    <li>
      <button className={isActive ? "active" : undefined} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
