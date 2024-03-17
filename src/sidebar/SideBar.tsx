import "./SideBar.css";

type Props = {
  isCollapsed: boolean;
};

function SideBar(props: Props) {
  return (
    <>
      {props.isCollapsed && <div className="sidebar-container"></div>}
      {!props.isCollapsed && <div className="sidebar-container-extended"></div>}
    </>
  );
}

export default SideBar;
