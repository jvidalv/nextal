import { useTheme as useNextTheme } from "next-themes";

export enum Theme {
  dark = "dark",
  light = "light",
}

export const useTheme = (): {
  isDarkTheme: boolean;
  setTheme: (theme: Theme) => void;
} => {
  const props = useNextTheme();

  return {
    isDarkTheme: props.theme === Theme.dark,
    setTheme: props.setTheme,
  };
};
