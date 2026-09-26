import {
  Code2,
  Megaphone,
  Palette,
  TrendingUp,
  Cpu,
  Brush,
  BookOpen,
  GraduationCap,
  Camera,
  Music,
  PenTool,
  LineChart,
  Briefcase,
  Globe,
  Layers,
  Database,
  Smartphone,
  Video,
  Mic,
  Calculator,
  FlaskConical,
  Dumbbell,
  Heart,
  Languages,
  Wallet,
  ShoppingBag,
  Rocket,
  Lightbulb,
  Users,
  Star,
} from "lucide-react";

// Curated set of icons an admin can attach to a category - a small,
// on-topic list rather than exposing all ~1500 lucide icons, which would
// make a picker unusable. A category only ever stores the string key
// (e.g. "Code2") since a React component can't be saved to MongoDB.
export const CATEGORY_ICONS = {
  Code2,
  Megaphone,
  Palette,
  TrendingUp,
  Cpu,
  Brush,
  BookOpen,
  GraduationCap,
  Camera,
  Music,
  PenTool,
  LineChart,
  Briefcase,
  Globe,
  Layers,
  Database,
  Smartphone,
  Video,
  Mic,
  Calculator,
  FlaskConical,
  Dumbbell,
  Heart,
  Languages,
  Wallet,
  ShoppingBag,
  Rocket,
  Lightbulb,
  Users,
  Star,
};

export const CATEGORY_ICON_NAMES = Object.keys(CATEGORY_ICONS);

// Falls back to BookOpen if a category's stored icon name is missing or
// no longer in the curated set above - a bad/old value never crashes
// the page, it just shows a generic book icon instead.
export function getCategoryIcon(name) {
  return CATEGORY_ICONS[name] || BookOpen;
}

// A small palette that matches the app's existing accent colors (the
// same ones used across gradients/glows elsewhere) rather than letting
// an admin pick an arbitrary color that might clash with the dark theme.
export const CATEGORY_COLORS = [
  "#1857C4", // spidey blue
  "#E0141E", // spidey red
  "#FF3B30", // hot red
  "#F59E0B", // amber (web-shooter glow)
  "#34D399", // green
  "#4C86F7", // sky blue
  "#0B3D91", // deep navy
  "#B0122A", // brick red
];