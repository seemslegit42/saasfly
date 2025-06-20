import { redirect } from "next/navigation";

import { authOptions, getCurrentUser } from "@nexos/auth";

import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";
import { UserNameForm } from "~/components/user-name-form";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn ?? "/login-clerk");
  }
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name ?? "" }} />
      </div>
    </DashboardShell>
  );
}
