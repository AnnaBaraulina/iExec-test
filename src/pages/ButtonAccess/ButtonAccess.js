import style from "./ButtonAccess.module.css";

const ButtonAccess = ({ state, onClick }) => {
  const styles = {
    cancel: {
        backgroundColor: '#1D1D24',
        color: '#FFFFFF'
    },
    share: {
        backgroundColor: '#FCD15A',
        color: '#1D1D24'
    }
  }


const texts = {
    cancel: 'Cancel',
    share: 'Share Access'

}

const currentStateStyle = styles[state];
  const currentText = texts[state];

  return (
    <button className={style.button} style={currentStateStyle} onClick={onClick}>
      {currentText}
    </button>
  );

}


export default ButtonAccess;
