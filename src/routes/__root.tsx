import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const criticalAboveTheFoldCss = `
:root{--red:#f00}*{box-sizing:border-box}html,body{margin:0;min-width:320px;background:#000;color:#fff}body{overflow-x:hidden;font-family:'Urbanist',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}main{position:relative;overflow:hidden;background:#000}.css-loading main>section:not(.hero),.css-loading main>footer{display:none}.hero{position:relative;display:flex;min-height:auto;flex-direction:column;align-items:center;overflow:hidden;padding:0 0 120px;background:transparent}.hero-art{position:relative;width:min(1400px,100vw);margin:0 auto}.hero-art:after{position:absolute;right:0;bottom:0;left:0;height:25%;background:linear-gradient(to bottom,transparent,#000 88%);content:''}.hero-art img{display:block;width:100%;height:auto}.hero-intro{position:relative;z-index:2;display:flex;width:min(940px,calc(100% - 40px));flex-direction:column;align-items:center;margin:clamp(-220px,-14vw,-80px) auto 0;text-align:center}.hero-kicker{margin:0 0 26px;color:var(--red);font-size:.82rem;font-weight:600;letter-spacing:.42em}.hero-intro h1{max-width:920px;margin:0;color:#f7f7f7;font-size:clamp(2.15rem,4.2vw,4.35rem);font-weight:800;line-height:1.08;letter-spacing:-.04em}.hero-intro>p:not(.hero-kicker){margin:34px 0 0;color:#d0d0d0;font-size:clamp(1.08rem,1.7vw,1.5rem);line-height:1.36}.hero-intro__button{display:inline-flex;min-width:260px;min-height:62px;align-items:center;justify-content:center;gap:10px;margin-top:42px;padding:0 34px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:linear-gradient(105deg,#a80000,#f00 88%);color:#fff;font-size:1.08rem;font-weight:800;text-decoration:none}@media(max-width:760px){.hero{padding-bottom:92px}.hero-art{width:100vw}.hero-intro{width:calc(100% - 40px);margin-top:-82px}.hero-kicker{margin-bottom:22px;font-size:.65rem;letter-spacing:.36em}.hero-intro h1{font-size:clamp(1.75rem,6vw,2.5rem);line-height:1.12}.hero-intro>p:not(.hero-kicker){margin-top:25px;font-size:1rem}.hero-intro__button{min-width:230px;margin-top:32px}}
`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Legacy Community | Tudo do digital em um só lugar" },
      { name: "description", content: "Cursos, ferramentas e uma comunidade ativa para aprender, aplicar e crescer no digital." },
      { name: "author", content: "Legacy Community" },
      { property: "og:title", content: "Legacy Community | Tudo do digital em um só lugar" },
      { property: "og:description", content: "Cursos, ferramentas e uma comunidade ativa para aprender, aplicar e crescer no digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", href: "/legacy-logo.webp" },
      { rel: "preload", href: "/legacy-hero.webp", as: "image", type: "image/webp" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="dark css-loading" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalAboveTheFoldCss }} />
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('css-loading')" }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
