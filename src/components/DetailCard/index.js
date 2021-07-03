import React from "react";

import styles from "./index.module.css";

const DetailCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <p>Подробная информация о событии</p>
      </div>
      <ul className={styles.list}>
        <li>
          <p>Объект</p>
          <p>{data.obj_type}</p>
        </li>

        <li>
          <p>ID директории</p>
          <p>{data.id_dir}</p>
        </li>

        <li>
          <p>На доступ к объекту</p>
          <p>
            <a href={data.link} target="_blank" rel="noreferrer">
              Открыть в новом окне
            </a>
          </p>
        </li>

        <li>
          <p>ID Группы</p>
          <p>{data.id_group}</p>
        </li>

        <li>
          <p>Группа</p>
          <p>{data.group}</p>
        </li>

        <li>
          <p>Группа</p>
          <p>
            {data.flags.map((flag) => (
              <p>{flag},</p>
            ))}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DetailCard;
