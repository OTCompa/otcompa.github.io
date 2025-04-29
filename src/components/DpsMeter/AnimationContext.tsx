import { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextType {
  animations: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animations, setAnimations] = useState(true);

  const toggleAnimations = () => {
    setAnimations((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ animations, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within an AnimationProvider"
    );
  }
  return context;
}
