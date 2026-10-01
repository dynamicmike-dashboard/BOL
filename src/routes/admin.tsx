import { createFileRoute, redirect } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { checkAuthServer } from "@/lib/admin/auth";

export const Route = createFileRoute("/admin")({
  loader: async () => {
    if (!checkAuthServer()) {
      throw redirect({ to: "/admin/login" });
    }
  },
  component: () => (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  ),
});