import { useEffect, useState } from "react";
import _ from "lodash";
import {
  magezon2Extensions,
  magezonBuilder,
  pageBuilder,
  hotDeals,
  contactUs,
  blueFormBuilder,
} from "../../constants";
import DetailsMenuItem from "../DetailsMenuItem/DetailsMenuItem";
import { st, classes } from "./DetailsMenu.st.css";
import StatusIcon from "../StatusIcon/StatusIcon";
export type DetailsMenuProps = {
  name?: string | string[];
  isShowToggle?: boolean | boolean[];
  value?: {
    isHot: boolean;
    isNew: boolean;
    isSale: boolean;
    isValue?: boolean;
  };
};

const DetailsMenu = ({ name, isShowToggle, value }: DetailsMenuProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [iconScroll, setIconSroll] = useState<number>(0);
  const handleScroll = () => {
    setIconSroll(window.scrollY);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIconSroll(window.scrollY);
    });
    return () => {
      document?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={st(classes.root, { isActive })}
      onMouseLeave={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
      data-hook="detail-menu-wapper"
    >
      <a href="#">
        <span className={st(classes.title, "abc")} data-hook="name-menu-detail">
          {name}
        </span>
        <span className={st(classes.iconDetailsMenu)}>
          {iconScroll < 145 ? (
            <StatusIcon
              isHot={value?.isHot}
              isNew={value?.isNew}
              isSale={value?.isSale}
              isvalue={value?.isValue}
            />
          ) : (
            ""
          )}
        </span>
      </a>

      {isShowToggle && isActive === false && (
        <div className={st(classes.hoverDown, { isActive })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={st(classes.iconDown, "bi bi-chevron-down")}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      )}

      {isActive && isShowToggle && (
        <div className={st(classes.hoverUp)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={st(classes.iconUp, "bi bi-chevron-up")}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </div>
      )}

      {isActive && isShowToggle && name === "Magento 2 Extensions" && (
        <div className={st(classes.detailsItemMenu1)}>
          {_.map(magezon2Extensions, (item, index) => (
            <DetailsMenuItem {...item} key={index} fontSize={18} />
          ))}
        </div>
      )}

      {isActive && isShowToggle && name === "Magezon Builder" && (
        <div className={st(classes.detailsItemMenu2)}>
          {_.map(magezonBuilder, (item, index) => (
            <DetailsMenuItem {...item} key={index} fontSize={15} />
          ))}
        </div>
      )}

      {isActive && isShowToggle && name === "Page Builder" && (
        <div className={st(classes.detailsItemMenu3)}>
          {_.map(pageBuilder, (item, index) => (
            <DetailsMenuItem {...item} key={index} fontSize={15} />
          ))}
        </div>
      )}

      {isActive && isShowToggle && name === "Blue Form Builder" && (
        <div className={st(classes.detailsItemMenu3)}>
          {_.map(blueFormBuilder, (item, index) => (
            <DetailsMenuItem {...item} key={index} fontSize={15} />
          ))}
        </div>
      )}

      {isActive && isShowToggle && name === "Contact Us" && (
        <div className={st(classes.detailsItemMenu3)}>
          {_.map(contactUs, (item, index) => (
            <DetailsMenuItem {...item} key={index} fontSize={15} />
          ))}
        </div>
      )}

      {isActive && isShowToggle && name === "Hot Deals" && (
        <div className={st(classes.detailsItemMenuLast)}>
          {_.map(hotDeals, (item, index) => (
            <DetailsMenuItem {...item} key={index} fontSize={15} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailsMenu;
