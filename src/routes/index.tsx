import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Obrigado" },
      { name: "description", content: "Agradecemos o seu contato." },
      { property: "og:title", content: "Obrigado" },
      { property: "og:description", content: "Agradecemos o seu contato." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
          Obrigado!
        </h1>
        <p className="mt-3 text-muted-foreground">
          Agradecemos a sua mensagem. Entraremos em contato em breve.
        </p>
      </div>
    </div>
  );
}
