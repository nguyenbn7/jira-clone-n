import UserButton from "@/features/auth/components/user-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Jira Clone",
    default: "Home",
  },
};

export default function Home() {
  return <UserButton />;
}
