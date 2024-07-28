import React, { useContext, useEffect, useState } from "react";

const LayoutContext = React.createContext();

const LayoutContextProvider = (props) => {
  const [backUrl, setBackUrl] = useState();
  const [title, setTitle] = useState();
  const [showAvatar, setShowAvatar] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(true);

  const resetState = () => {
    setBackUrl(undefined);
    setTitle(undefined);
    setShowAvatar(true);
    setShowBottomNav(true);
  };

  useEffect(() => {
    if (props.backUrl !== backUrl) {
      setBackUrl(props.backUrl);
    }
    if (props.title !== title) {
      setTitle(props.title);
    }
  }, [props]);

  return (
    <LayoutContext.Provider
      value={{
        backUrl,
        title,
        showAvatar,
        showBottomNav,
        setShowBottomNav,
        setShowAvatar,
        setBackUrl,
        setTitle,
        resetState,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  return useContext(LayoutContext);
};

export default LayoutContextProvider;
