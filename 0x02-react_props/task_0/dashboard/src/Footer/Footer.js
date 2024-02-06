import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

<div className="App-footer">
  <p>
    Copyright {getFullYear()} - {getFooterCopy()}
  </p>
</div>;
