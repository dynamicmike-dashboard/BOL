// src/entry-client.tsx - Client entry point for SPA mode
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getRouter } from "./router";
import { LangProvider } from "./lib/i18n";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient();
const router = getRouter();

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <RouterProvider router={router} />
        <Toaster />
      </LangProvider>
    </QueryClientProvider>
  </StrictMode>
);