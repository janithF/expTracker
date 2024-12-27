import { createTheme } from "@mui/material/styles";
import { categoryColors } from "./data/categories";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F8076", // Use the "primary" color
      light: "#52AEA3", // Use the "primary-light" color
      contrastText: "#FFFFFF", // Optional: Text color on primary backgrounds
    },
    secondary: {
      main: "#AEDDCB", // Use the "secondary" color
    },
    background: {
      paper: "#F7F8F3", // Use the "background" color
    },
    success: {
      main: "#AADF87", // Use the "success" color
    },
    error: {
      main: "#E57373", // Use the "danger" color
    },
    warning: {
      main: "#FFB74D", // Use the "warning" color
    },
    grey: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    // Additional category colors as custom keys
    categories: {
      ...categoryColors,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Use a custom font family
  },
});

// Extend the theme to include custom categories
declare module "@mui/material/styles" {
  interface Palette {
    categories: Record<string, string>;
  }
  interface PaletteOptions {
    categories?: Record<string, string>;
  }
}

export default theme;
