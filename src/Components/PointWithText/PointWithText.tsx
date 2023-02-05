import style from "./PointWithText.module.scss"

export const PointWithText = ({
  pointNumber,
  primaryText,
  secondaryText,
}: {
  pointNumber:number;
  primaryText:React.ReactNode;
  secondaryText:React.ReactNode;
}) => {
  return (
    <div className={style.container}>
      <div className={style.pointBox}>{pointNumber}</div>
      <div className={style.info}>
        <div className={style.primaryText}>{primaryText}</div>
        <div className={style.secondaryText}>{secondaryText}</div>
      </div>
    </div>
  );
};
