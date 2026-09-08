import { createFileRoute } from "@tanstack/react-router";

function IndexComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Olá!</h1>
      <p className="mt-4 text-lg text-muted">O projeto está pronto para começar.</p>
    </main>
  );
}

export const Route = createFileRoute("/")({
  component: IndexComponent,
  head: () => ({
    meta: [
      { title: "Início" },
      { name: "description", content: "Página inicial do projeto." },
      { property: "og:title", content: "Início" },
      { property: "og:description", content: "Página inicial do projeto." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
