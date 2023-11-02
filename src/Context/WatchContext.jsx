import { createContext, useContext, useState } from "react";
const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

const WatchProvider = ({ children }) => {
const [currWatch, setCurrWatch] = useState({});

const value = {currWatch,setCurrWatch};

return <TodoContext.Provider
 value={value}>{children}
 </TodoContext.Provider>;

};

export default WatchProvider;
