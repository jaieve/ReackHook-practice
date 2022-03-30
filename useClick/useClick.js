export const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    // 1. 변수를 안에서 copy하지 않으면 warning (ref가 unmount 시점에 null이 된다.)
    const element = ref.current;
    if (element) {
      // 'click' is keyword
      element.addEventListener("click", onClick);
    }
    // ComponentWillUnmount()
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return typeof onClick !== "function" ? ref.current : undefined;
};
