import { createMemo } from "solid-js";

import data from "../Misc/data";
import styles from "./ToDay.module.css";

function ToDay({ toDay }) {
  const next = createMemo(() => data[toDay() - 1]);

  return (
    <div className={styles.nextDay}>
      <h3 className={styles.judul}>Mata Pelajaran Hari Ini</h3>
      <p className={styles.putih}>
        Sekarang hari <a className={styles.warna}><b>{next().hari}</b></a>
      </p>
      <p className={styles.putih}>
        Mapel <a className={styles.warna}> {" "}
        {next()
          .mapel.filter((x) => x !== undefined)
          .filter((x) => x !== null)
          .join(", ")} </a>
        .
      </p>
    </div>
  );
}

export default ToDay;
