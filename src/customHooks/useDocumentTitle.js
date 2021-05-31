import { useEffect } from "react";

export const useDocumentTitle = ({ title }) => {
  useEffect(() => {
    window.title = title;
  }, [title]);
};
