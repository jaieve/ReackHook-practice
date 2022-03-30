export const useFullScreen = (callback) => {
  const element = useRef();
  const rub = (isFull) => {
    if (callback || typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        // chrome, safari
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        // firefox
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        // opera
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        // microsoft
        element.current.msRequestFullscreen();
      }
      rub(true);
    }
  };
  const exitFullScreen = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    rub(false);
  };
  return { element, triggerFull, exitFullScreen };
};
