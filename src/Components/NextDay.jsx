import { createMemo } from "solid-js";

import data from "../Misc/data";
import styles from "./NextDay.module.css";

function NextDay({ nextDay }) {
  const next = createMemo(() => data[nextDay() - 1]);

  return (
    <div className={styles.nextDay}>
      <h3 className={styles.putih}>Mata Pelajaran Selanjutnya</h3>
      <p className={styles.putih}>
        Hari Belajar Selanjutnya hari <a className={styles.warna}><b>{next().hari}</b></a>
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

export default NextDay;
