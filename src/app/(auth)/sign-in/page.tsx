import type { Metadata } from "next";
import SignInCard from "@/features/auth/components/sign-in-card";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function SignInPage() {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignInCard />;
}
