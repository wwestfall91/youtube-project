import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";

type Props = {
  toggleLeftBar: () => void;
};

function Header(props: Props) {
  return (
    <>
      <div className="header-container">
        <div className="header-item">
          <div className="toggle-sidebar-button" onClick={props.toggleLeftBar}>
            __
          </div>
          <div>Premium</div>
        </div>
        <div className="header-item">
          <SearchBar></SearchBar>
          <div className="microphone"></div>
        </div>
        <div className="header-item">
          <div className="camera">►</div>
          <div className="bell">♫</div>
          <div className="profile">Profile</div>
        </div>
      </div>
    </>
  );
}

export default Header;
