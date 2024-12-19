import { Fragment } from "react";
import User from "../Components/User/User";
import InputSearchAndTable from "../Components/InputSearchAndTable/InputSearchAndTable";
import "./App.css";
const App = () => {
  return (
    <Fragment>
      <div>
        <User />
        <InputSearchAndTable />
      </div>
    </Fragment>
  );
};

export default App;
