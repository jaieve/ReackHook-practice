export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.online); // boolean
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.online);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
