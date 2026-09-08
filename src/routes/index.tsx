import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold">Olá!</h1>
      <p className="mt-2 opacity-80">Projeto reiniciado. Adicione suas páginas aqui.</p>
    </main>
  );
}
