import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@nexos/ui";
import { buttonVariants } from "@nexos/ui/button";
import * as Icons from "@nexos/ui/icons";

import { UserClerkAuthForm } from "~/components/user-clerk-auth-form";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href={`/${lang}`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
        )}
      >
        <>
          <Icons.ChevronLeft className="mr-2 h-4 w-4" />
          {dict.login.back}
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <Image
            src="/images/avatars/saasfly-logo.svg"
            className="mx-auto"
            width="64"
            height="64"
            alt=""
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            {dict.login.welcome_back}
          </h1>
        </div>
        <UserClerkAuthForm lang={lang} dict={dict.login} />
      </div>
    </div>
  );
}
