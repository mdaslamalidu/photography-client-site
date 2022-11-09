import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - My Photography`;
  }, [title]);
};

export default useSetTitle;
