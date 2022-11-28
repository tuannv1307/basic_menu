import _ from "lodash";
import { itemNav } from "../../constants";
import DetailsMenu from "../DetailsMenu/DetailsMenu";
import { st, classes } from "./NavBarItem.st.css";

export type ItemProps = {
  name: string;
  isShowToggle: boolean;
};

const NavBarItem = () => {
  return (
    <nav className={st(classes.root)} data-hook="nav-bar">
      {_.map(itemNav, (item, index) => {
        return <DetailsMenu {...item} key={index} />;
      })}
    </nav>
  );
};
export default NavBarItem;
