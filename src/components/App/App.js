import React from "react";
import Header from "components/App/Header/Header";
import Body from "components/App/Body/Body";
import AppContext from "components/AppContext";

const App = () => {
  return (
    <AppContext.Provider>
      <>
        <Header />
        <Body />
      </>
    </AppContext.Provider>
  );
};

export default App;