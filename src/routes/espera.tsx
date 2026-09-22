import { createFileRoute } from '@tanstack/react-router';
import { ExitIntentSection } from '@/components/exit-intent-section';

export const Route = createFileRoute('/espera')({
  head: () => ({
    meta: [
      { title: 'Antes de sair | Legacy Community' },
      { name: 'description', content: 'Fale com a equipe da Legacy Community e tire suas dúvidas.' },
    ],
  }),
  component: WaitPage,
});

function WaitPage() {
  return (
    <main>
      <ExitIntentSection />
    </main>
  );
}
