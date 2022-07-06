import react, { createContext, useState } from "react";
export const PracticeContext = createContext({
  Click: () => {},
  state: ""
});
export const ContextProvider = (Props) => {
  const [state, setState] = useState();
  const Click = () => {
    setState("hello");
  };

  return (
    <PracticeContext.Provider
      value={{
        Click: Click,
        state: state
      }}
    >
      {Props.children}
    </PracticeContext.Provider>
  );
};
