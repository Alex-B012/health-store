import { useEffect, useState } from "react";
import { linksData, profileData } from "../../data/data";

const useTabTitleAbout = (): string => {
  const [pageName, setPageName] = useState<string>("");

  useEffect(() => {
    const path = window.location.pathname;
    const segments = path.split("/").filter(Boolean);
    const result = segments[segments.length - 1] || "";

    if (result && result.length > 0 && result === "about") {
      document.title = `${linksData.about.name} - ${profileData.name}`;
      setPageName(linksData.about.name);
    } else {
      document.title = `${profileData.name}`;
      setPageName("");
    }
  }, []);

  return pageName;
};

export default useTabTitleAbout;
