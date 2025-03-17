import type { Metadata } from "next";
import SignInCard from "@/features/auth/components/sign-in-card";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignInPage() {
  return <SignInCard />;
}
