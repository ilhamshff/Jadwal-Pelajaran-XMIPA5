import { createMemo } from "solid-js";

import styles from "./App.module.scss";

import Table from "./Components/Table";
import NextDay from "./Components/NextDay";
import ToDay from "./Components/ToDay";
import Header from "./Components/header"


function App() {
  
  const currentDayIndex = createMemo(() => new Date().getDay());

  const nextDay = createMemo(() => {
    const today = currentDayIndex();

    if (today > 4 || today < 1) return 1;
    return today + 1;
  });

  const cek = createMemo(() => {
    const today = currentDayIndex();

    return today;
  });

  const today = currentDayIndex(); 
  return (
    <div className={`flex one ${styles.App}`}>
      <Header />
      <Table oncopy="return false" currentDayIndex={currentDayIndex} nextDay={nextDay} />
      <ToDay toDay={cek} />
      <NextDay nextDay={nextDay} />
    </div>
  );
}


window.addEventListener("contextmenu", e => e.preventDefault());

document.onselectstart = new Function('return false');

export default App;
