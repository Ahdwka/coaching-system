import type { LucideIcon } from "lucide-react";
import { Home, Laptop, Info, Phone, LogIn, LogOut } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  variant?: "default" | "ghost";
}

export const navigationConfig: NavItem[] = [
  {
    title: "الصفحة الرئيسية",
    href: "/",
    icon: Home,
    variant: "ghost",
  },
  {
    title: "تسجيل الدخول",
    href: "/login",
    icon: LogIn,
    variant: "ghost",
  },
];
