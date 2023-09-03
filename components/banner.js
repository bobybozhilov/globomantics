import { logo } from "./banner.module.css"

const Banner = ({ headerText }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./favicon.ico" alt="logo" className={logo}></img>
      </div>
      <div className="col-7 mt-5 themeFontColor">
        <i>{headerText}</i>
      </div>
    </header>
  );
};

export default Banner;
