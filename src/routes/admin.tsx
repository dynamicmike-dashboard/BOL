import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { AdminLayout, AdminAuthProvider } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin")({
  component: () => (
    <AdminAuthProvider>
      <AdminLayout>
        <AdminDashboard />
      </AdminLayout>
    </AdminAuthProvider>
  ),
});