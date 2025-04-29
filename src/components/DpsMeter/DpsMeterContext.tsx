"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface DpsMeterContextType {
  animations: boolean;
  toggleAnimations: () => void;
  isMobile: boolean;
  colSetup: string;
}

const DpsMeterContext = createContext<DpsMeterContextType | undefined>(
  undefined
);

export function DpsMeterProvider({ children }: { children: ReactNode }) {
  const [animations, setAnimations] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const toggleAnimations = () => {
    setAnimations((prev) => !prev);
  };

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 768);
  }, []);

  const colSetup = isMobile
    ? "grid-cols-[1fr_3fr_2fr_1fr]"
    : "grid-cols-[1fr_3fr_2fr_1fr_1fr_1fr_1fr]";
  return (
    <DpsMeterContext.Provider
      value={{ animations, toggleAnimations, isMobile, colSetup }}
    >
      {children}
    </DpsMeterContext.Provider>
  );
}

export function useDpsMeterContext() {
  const context = useContext(DpsMeterContext);
  if (!context) {
    throw new Error(
      "useDpsMeterContext must be used within an DpsMeterProvider"
    );
  }
  return context;
}
