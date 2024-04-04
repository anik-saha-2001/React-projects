import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NewsBoard from "./components/NewsBoard/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div className="page">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category}  />
    </div>
  );
};

export default App;
