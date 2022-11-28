import { useEffect, useState } from "react";
import { st, classes } from "./StatusIcon.st.css";

type StatusIconProps = {
  isHot?: boolean;
  isNew?: boolean;
  isSale?: boolean;
  isvalue?: boolean;
};

const StatusIcon = ({ isHot, isNew, isSale, isvalue }: StatusIconProps) => {
  const [title, settitle] = useState<string>("");

  useEffect(() => {
    if (isHot) {
      settitle("Hot");
    }
    if (isNew) {
      settitle("New");
    }
    if (isSale) {
      settitle("Sale");
    }
    if (isvalue) {
      settitle("15");
    }
  }, []);

  return (
    <>
      {isHot && (
        <span className={st(classes.lableHot)} data-hook="icon">
          {title}
        </span>
      )}
      {isNew && (
        <span className={st(classes.lableNew)} data-hook="icon">
          {title}
        </span>
      )}
      {isSale && (
        <span className={st(classes.lableSale)} data-hook="icon">
          {title}
        </span>
      )}
      {isvalue && (
        <span className={st(classes.lableNew)} data-hook="icon">
          {title}
        </span>
      )}
    </>
  );
};
export default StatusIcon;
