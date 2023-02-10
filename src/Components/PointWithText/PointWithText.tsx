import style from "./PointWithText.module.scss";

export const PointWithText = ({
  pointNumber,
  primaryText,
  secondaryText,
  wider=false,
}: {
  pointNumber: number;
  primaryText: React.ReactNode;
  secondaryText: React.ReactNode;
  wider?: boolean;
}) => {
  return (
    <div className={`${style.container} ${wider ? style.restPoints : ""}`}>
      <div className={style.pointBox}>{pointNumber}</div>
      <div className={style.info}>
        <div className={style.primaryText}>{primaryText}</div>
        <div className={style.secondaryText}>{secondaryText}</div>
      </div>
    </div>
  );
};
