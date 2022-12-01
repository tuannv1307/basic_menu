import _ from "lodash";
import { useState } from "react";
import StatusIcon from "../StatusIcon/StatusIcon";
import { st, classes } from "./DetailsMenuItem.st.css";

export type DetailsMenuItemProps = {
  name?: string;
  category?: {
    name: string;
    value: { isHot: boolean; isSale: boolean; isNew: boolean };
  }[];
  value?: {
    isHot: boolean;
    isSale: boolean;
    isNew: boolean;
  };
  fontSize?: string | number;
  abc?: boolean;
};

const DetailsMenuItem = ({
  name,
  category,
  value,
  fontSize,
}: DetailsMenuItemProps) => {
  const [activeHover, setActiveHover] = useState<boolean>(false);

  return (
    <div className={st(classes.root, { fontSize })} data-hook="item-details">
      <div
        className={st(classes.navItem, { fontSize, activeHover })}
        data-hook="nav-item"
        onMouseLeave={() => setActiveHover(false)}
        onMouseEnter={() => setActiveHover(true)}
      >
        <a href="#" data-hook="nav-item-a">
          <span className={st(classes.categoryTitle, { fontSize })}>
            {name}
            <span className={st(classes.iconDetailsMenuItem)}>
              <StatusIcon
                isHot={value?.isHot}
                isSale={value?.isSale}
                isNew={value?.isNew}
              />
            </span>
          </span>
        </a>
      </div>

      {_.map(category, (item, index) => {
        return (
          <div
            className={st(classes.navItem, { fontSize, activeHover })}
            key={index}
            data-hook="nav-item-category"
          >
            <a href="#">
              <span className={st(classes.title)}>
                {item.name}
                <span className={st(classes.iconTile)}>
                  <StatusIcon
                    isHot={item.value.isHot}
                    isSale={item.value.isSale}
                    isNew={item.value.isNew}
                  />
                </span>
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default DetailsMenuItem;
