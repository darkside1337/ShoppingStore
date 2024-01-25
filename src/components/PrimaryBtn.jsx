import "../styles/PrimaryBtn.css";

const PrimaryBtn = ({ onClick, text }) => {
  return (
    <button className="primary-btn learn-more" onClick={onClick}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default PrimaryBtn;
