import React, { createContext, useState, useContext } from "react";

// Sidebar Context
const SidebarContext = createContext();

// use Sidebar Context
const useSidebar = () => useContext(SidebarContext);

// Sidebar Provider Component
const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isSidebarOpen)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export {SidebarProvider};
export default useSidebar;

