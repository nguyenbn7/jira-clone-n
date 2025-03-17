import type { Metadata } from "next";
import SignUpCard from "@/features/auth/components/sign-up-card";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUpPage() {
  return <SignUpCard />;
}
