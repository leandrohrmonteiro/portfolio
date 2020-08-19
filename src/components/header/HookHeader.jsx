import React, { useState, useContext } from "react";
import { GlobalContext } from "../globalcontext/GlobalContext.js";

import "../header/Header.scss";
import PortActive from "../../assets/icons flags/portugal.png";
import PortInactive from "../../assets/icons flags/portugalBW.png";
import EngActive from "../../assets/icons flags/uk.png";
import EngInactive from "../../assets/icons flags/ukBW.png";

function HookHeader() {
  const [lang, setLang] = useContext(GlobalContext);

  const [flag, setFlag] = useState({
    flagPort: PortActive,
    flagPortDisabled: false,
    flagEng: EngInactive,
    flagEngDisabled: true,
  });

  let chooseEng = () => {
    setLang("eng");
    setFlag({
      flagPort: PortInactive,
      flagPortDisabled: true,
      flagEng: EngActive,
      flagEngDisabled: false,
    });
  };

  let choosePort = () => {
    setLang("port");
    setFlag({
      flagPort: PortActive,
      flagPortDisabled: false,
      flagEng: EngInactive,
      flagEngDisabled: true,
    });
  };

  console.log(`language from global context is: ${lang}`);

  return (
    <div id="header" className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <h2 className="name col">Leandro Monteiro</h2>
        <h4 className="name col">Front End Development</h4>
      </div>
      <div id="flags" className="col-1">
        <button
          id="port"
          className="flag"
          disabled={flag.flagPortDisabled}
          onClick={chooseEng}
        >
          <img src={flag.flagPort} alt="port active" />
        </button>
        <button
          id="eng"
          className="flag"
          disabled={flag.flagEngDisabled}
          onClick={choosePort}
        >
          <img src={flag.flagEng} alt="eng active" />
        </button>
      </div>
    </div>
  );
}

export default HookHeader;
