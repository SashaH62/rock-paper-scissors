
export const GenericButton = ({ type, onClickHandler, children }) => {
  return (
    <button className={`button ${type}`} onClick={onClickHandler}>
      {children}
    </button>
  );
};
