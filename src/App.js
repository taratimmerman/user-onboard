import React, { useState } from "react";

import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import UsersSctn from "./components/UsersSctn";

function App() {
  const [formVisibility, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
  };

  return (
    <>
      <Header
        toggleFunction={toggleForm}
        visibility={formVisibility}
      />
      <UsersSctn
        visibility={formVisibility}
      />
      <Footer />
    </>
  );
}

export default App;
