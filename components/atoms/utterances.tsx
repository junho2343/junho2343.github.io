import React from "react";

const Utterances = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "junho2343/junho2343.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    script.setAttribute("label", "댓글");
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref}></div>;
};

export default Utterances;
