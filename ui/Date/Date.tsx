import React from "react";
import styles from "./Date.module.scss";
import { parseISO, format } from "date-fns";

interface IDate {
  dateString: string;
}

const Date: React.FC<IDate> = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time className={styles.date} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};

export default Date;
