import { MessageCircle } from 'lucide-react';

export function ExitIntentSection() {
  return (
    <section className="exit-intent" id="espera" aria-labelledby="exit-intent-title">
      <div className="exit-intent__content">
        <h2 id="exit-intent-title">Calma aí</h2>
        <p className="exit-intent__subtitle">Não saia da página ainda</p>
        <img
          className="exit-intent__mascot"
          src="/legacy-exit-mascot.webp"
          alt="Mascote da Legacy usando um moletom preto"
          width="1400"
          height="1400"
          decoding="async"
        />
        <p className="exit-intent__quote">“A Legacy reúne conteúdos, ferramentas e comunidade em um só lugar — e muita gente só entende o valor depois que entra.”</p>
        <p className="exit-intent__support">Se ainda ficou com alguma dúvida, fale com a nossa equipe no WhatsApp. A gente te responde.</p>
        <a
          className="exit-intent__button"
          href="https://wa.me/5561992039398?text=Ol%C3%A1%2C%20tenho%20algumas%20d%C3%BAvidas%20sobre%20a%20Legacy%21"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" /> Tenho algumas dúvidas
        </a>
      </div>
    </section>
  );
}
