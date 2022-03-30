export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onscroll = () => {
    console.log("y", window.scrollY, "x", window.scrollX);
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return state;
};
