import { createFileRoute } from '@tanstack/react-router';
import {
  ArrowRight,
  Check,
  Crown,
  KeyRound,
  Layers3,
  LockKeyhole,
  MessageSquare,
  Search,
  Send,
  ShieldCheck,
  UsersRound,
  WandSparkles,
  Zap,
} from 'lucide-react';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Legacy Community | Tudo do digital em um só lugar' },
      {
        name: 'description',
        content: 'Cursos, ferramentas e uma comunidade ativa para aprender, aplicar e crescer no digital.',
      },
      { property: 'og:title', content: 'Legacy Community | Tudo do digital em um só lugar' },
      {
        property: 'og:description',
        content: 'Cursos, ferramentas e uma comunidade ativa para aprender, aplicar e crescer no digital.',
      },
    ],
  }),
  component: Home,
});

const nicheCards = [
  { image: undefined, emoji: '🎥', title: 'Vídeos & Criativos', description: 'Cortes, referências e materiais visuais' },
  { image: undefined, emoji: '🌐', title: 'Sites & Templates', description: 'Páginas, modelos e estruturas prontas' },
  { image: undefined, emoji: '📕', title: 'PDFs & Ebooks', description: 'Biblioteca organizada por categoria' },
  { image: undefined, emoji: '🎓', title: 'Cursos & Aulas', description: 'Conteúdos para evoluir no digital' },
  { image: undefined, emoji: '📂', title: 'Drives & Packs', description: 'Arquivos e materiais centralizados' },
  { image: undefined, emoji: '📱', title: 'Apps & Ferramentas', description: 'Recursos úteis para o dia a dia' },
  { image: undefined, emoji: '🤖', title: 'Robôs & Automação', description: 'Soluções para acelerar tarefas' },
  { image: undefined, emoji: '🔥', title: 'Conteúdos Hot', description: 'Novidades que acabaram de entrar' },
];

const mobileChannels = [
  { emoji: '📕', name: 'PDFs' },
  { emoji: '🌐', name: 'Sites' },
  { emoji: '🎥', name: 'Vídeos' },
  { emoji: '📂', name: 'Drives' },
  { emoji: '🔥', name: 'Hot' },
  { emoji: '📱', name: 'Apps' },
  { emoji: '🎓', name: 'Cursos' },
  { emoji: '🤖', name: 'Robôs' },
  { emoji: '📦', name: 'PLR' },
  { emoji: '🎬', name: 'VSL' },
  { emoji: '💡', name: 'Info' },
  { emoji: '🚚', name: 'Dropshipping' },
  { emoji: '✍️', name: 'Copys' },
  { emoji: '🎞️', name: 'Edição' },
  { emoji: '📊', name: 'Painéis' },
  { emoji: '📈', name: 'Planilhas' },
  { emoji: '🧠', name: 'IAs' },
  { emoji: '🎨', name: 'Design' },
];

const mobileTopChannels = mobileChannels.filter((_, index) => index % 2 === 0);
const mobileBottomChannels = mobileChannels.filter((_, index) => index % 2 !== 0);

const bonuses = [
  {
    emoji: '👥',
    title: 'Comunidade ativa com +1.000 membros',
    description:
      'Networking, troca de ideias, suporte e uma grande variedade de canais e conteúdos organizados dentro do Discord.',
    label: 'Discord exclusivo',
  },
  {
    emoji: '🎓',
    title: 'Cursos completos',
    description:
      'Acesso a mais de 10 mil cursos completos em todas as áreas do digital. Novos conteúdos adicionados diariamente — todos gratuitos para membros.',
    label: 'Via fornecedores exclusivos',
  },
  {
    emoji: '📦',
    title: 'Fornecedores de rateio em um só lugar',
    description:
      'Acesso a todos os nossos fornecedores de cursos, APKs, drives, ferramentas, conteúdos digitais e muito mais.',
    label: 'Lista de fornecedores',
  },
  {
    emoji: '🔎',
    title: 'Consulta de dados via Telegram',
    description:
      'Acesse nossa ferramenta exclusiva de consulta de dados diretamente pelo Telegram. Rápido, prático e disponível 24h.',
    label: 'Puxada exclusiva da comunidade',
  },
  {
    emoji: '🤝',
    title: 'Grupos de networking no WhatsApp',
    description:
      'Acesso a grupos ativos no WhatsApp com membros que trocam experiências, estratégias e oportunidades todos os dias.',
    label: 'Conexões que geram resultados',
  },
];

const socialProofs = [
  '/prova-1.webp',
  '/prova-2.webp',
  '/prova-3.webp',
  '/prova-4.webp',
  '/prova-5.webp',
];

const offerItems = [
  'Comunidade exclusiva no Discord com +1.000 membros ativos',
  'Acesso a +10 mil cursos completos via Telegram',
  'Fornecedores de cursos, APKs, drives e muito mais',
  'Consulta de dados via Telegram disponível 24 horas',
  'Grupos exclusivos de networking no WhatsApp',
  'Suporte e novidades dentro da comunidade',
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? 'brand-mark brand-mark--compact' : 'brand-mark'} aria-label="Legacy Community">
      <span className="brand-glyph"><img src="/legacy-logo.webp" alt="" width="640" height="640" decoding="async" /></span>
      <span className="brand-name">LEGACY</span>
      <span className="brand-version">2.0</span>
    </span>
  );
}

function ProductMockup() {
  return (
    <figure className="access-showcase-image">
      <img
        src="/legacy-access.webp"
        alt="Legacy Community aberta no computador e no celular"
        width="1600"
        height="900"
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

function Home() {
  return (
    <main>
      <ScrollReveal />
      <section className="hero" id="inicio">
        <div className="hero-art">
          <img
            src="/legacy-hero.webp"
            alt="Legacy Community com mascote aranha e caixas de conteúdos digitais"
            width="1920"
            height="1920"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-intro">
          <p className="hero-kicker">ACESSO À LEGACY + ATUALIZAÇÕES</p>
          <h1>Aprenda o que quiser. Quando quiser. Sem depender de ninguém.</h1>
          <p>Chega de procurar conteúdo em vários lugares.<br />Na Legacy, está tudo reunido para você.</p>
          <a className="primary-button hero-intro__button" href="#motivos">
            Quero saber mais <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section className="reasons" id="motivos" aria-labelledby="reasons-title">
        <div className="reasons-card">
          <h2 id="reasons-title">Tá, mas afinal: por que a Legacy vale tanto a pena?</h2>
          <article>
            <span className="reason-icon reason-icon--send"><Send fill="currentColor" /></span>
            <h3>Tudo o que você precisa no digital, reunido</h3>
            <p>Tráfego, copy, design, IA, programação, negócios e muito mais em um único ambiente.</p>
          </article>
          <article>
            <span className="reason-icon reason-icon--check"><Check /></span>
            <h3>Acesso simples, sem enrolação</h3>
            <p>Você recebe as orientações, entra na comunidade e já pode explorar tudo no seu ritmo.</p>
          </article>
          <article>
            <span className="reason-icon reason-icon--community"><MessageSquare fill="currentColor" /><UsersRound /></span>
            <h3>Uma comunidade que realmente participa</h3>
            <p>Mais que conteúdo: troca de experiências, suporte, networking e os bastidores do mercado digital.</p>
          </article>
        </div>
      </section>

      <section className="niches section-shell" id="conteudo">
        <div className="niches-heading reveal">
          <p className="eyebrow">DENTRO DA LEGACY</p>
          <h2>Nichos disponíveis</h2>
          <p>Escolha uma área e encontre tudo organizado em poucos cliques.</p>
        </div>
        <div className="mobile-channel-showcase viewport-animation reveal" aria-label="Canais disponíveis na Legacy Community">
          <div className="mobile-marquee mobile-marquee--top">
            <div className="mobile-marquee__track">
              {[0, 1].map((copy) => (
                <div className="mobile-marquee__group" aria-hidden={copy === 1} key={`top-${copy}`}>
                  {mobileTopChannels.map((channel) => (
                    <div className="mobile-channel" key={`${channel.name}-${copy}`}>
                      <span aria-hidden="true">{channel.emoji}</span>
                      <b>{channel.name}</b>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mobile-channel-brand">
            <img src="/legacy-logo.webp" alt="Logo Legacy Community" width="640" height="640" loading="lazy" decoding="async" />
          </div>
          <div className="mobile-marquee mobile-marquee--bottom">
            <div className="mobile-marquee__track">
              {[0, 1].map((copy) => (
                <div className="mobile-marquee__group" aria-hidden={copy === 1} key={`bottom-${copy}`}>
                  {mobileBottomChannels.map((channel) => (
                    <div className="mobile-channel" key={`${channel.name}-${copy}`}>
                      <span aria-hidden="true">{channel.emoji}</span>
                      <b>{channel.name}</b>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="niche-feed" aria-label="Nichos disponíveis na Legacy Community">
          {nicheCards.map((card) => {
            return (
              <article className="niche-notification reveal" key={card.title}>
                <span className="niche-notification__icon">
                  {card.image ? <img src={card.image} alt="" /> : <span className="niche-notification__emoji" aria-hidden="true">{card.emoji}</span>}
                </span>
                <span className="niche-notification__copy">
                  <strong>{card.title}</strong>
                  <small>{card.description}</small>
                </span>
                <time>há 2m</time>
              </article>
            );
          })}
        </div>
      </section>

      <section className="access section-shell" id="acesso">
        <div className="section-heading reveal">
          <h2>Como funciona o acesso à Legacy</h2>
          <p>Tudo foi pensado para ser simples, rápido e direto. Em poucos minutos, você já pode começar a explorar.</p>
        </div>
        <div className="reveal"><ProductMockup /></div>
        <div className="access-steps reveal">
          <article><KeyRound /><div><h3>Receba o link de acesso</h3><p>Após a confirmação, você recebe as instruções de entrada no ambiente de membros.</p></div></article>
          <article><Layers3 /><div><h3>Entre na área de membros</h3><p>Acesse tutoriais, categorias, recursos e todos os canais oficiais da comunidade.</p></div></article>
          <article><Search /><div><h3>Explore tudo por dentro</h3><p>Escolha o tema que precisa, encontre o conteúdo e comece a aplicar no seu ritmo.</p></div></article>
        </div>
      </section>

      <section className="bonus-section section-shell" id="bonus">
        <div className="bonus-heading reveal">
          <h2>Além do acesso à Legacy, você ainda leva conteúdos e ferramentas que aumentam sua velocidade e resultado no digital.</h2>
          <p>Tudo reunido em uma experiência simples, organizada e direta.</p>
        </div>
        <div className="bonus-list">
          {bonuses.map((bonus, index) => {
            return (
              <article className="bonus-step reveal" key={bonus.title}>
                <div className="bonus-step__marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <b>{bonus.emoji}</b>
                </div>
                <div className="bonus-step__copy">
                  <span className="bonus-index">{bonus.label}</span>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.description}</p>
                  <span className="bonus-included">INCLUSO NO ACESSO À LEGACY</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="testimonials section-shell" id="depoimentos">
        <h2 className="proof-heading">O que quem já acessou tá falando da Legacy 👀</h2>
        <div className="proof-viewport viewport-animation" aria-label="Depoimentos reais de membros da Legacy">
          <div className="proof-track">
            {[0, 1].map((copy) => (
              <div className="proof-group" aria-hidden={copy === 1} key={`proof-group-${copy}`}>
                {socialProofs.map((src, index) => (
                  <figure className="proof-shot" key={`${src}-${copy}`}>
                    <img
                      src={src}
                      alt={copy === 0 ? `Conversa com feedback de membro da Legacy ${index + 1}` : ''}
                      width="900"
                      height="1946"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offer section-shell" id="oferta">
        <div className="offer-grid">
          <div className="price-card reveal">
            <BrandMark compact />
            <span className="offer-kicker">SEU ACESSO À LEGACY</span>
            <h2>Quanto custa ter acesso<br />a tudo isso?</h2>
            <p className="offer-lead">Conteúdo, comunidade e suporte para você avançar no digital.</p>
            <ul>
              {offerItems.map((item) => <li key={item}><Check />{item}</li>)}
            </ul>
            <div className="price-divider" />
            <span className="price-label">POR APENAS 4X DE</span>
            <div className="installment-price" aria-label="4 parcelas de 5 reais e 82 centavos">
              <span className="installment-currency">R$</span>
              <strong className="installment-value">5,82</strong>
            </div>
            <span className="cash-price">OU R$ 19,90 À VISTA</span>
            <a className="primary-button primary-button--full" href="https://pay.cakto.com.br/39zc7kq_1087594"><LockKeyhole size={18} /> Quero entrar para a Legacy</a>
            <div className="payment-row"><ShieldCheck /> Compra protegida <span>•</span> Acesso após confirmação</div>
            <div className="payment-brands" aria-label="Formas de pagamento aceitas">
              <img src="/payment-methods-clean.webp" alt="Mastercard, Visa, boleto e PayPal" width="2172" height="724" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <h2 className="section-title">FAQ — PERGUNTAS ESSENCIAIS</h2>
        <p className="faq-subtitle">Tire suas principais dúvidas sobre a Legacy Community.</p>
        <div className="faq-wrap"><LegacyFaq /></div>
      </section>

      <footer>
        <p className="footer-copyright">© 2025 LEGACY — Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/termos">Termos de Uso</a><span>|</span><a href="/termos#privacidade">Política de Privacidade</a>
        </div>
        <div className="footer-legal">
          <p>As informações fornecidas neste site são armazenadas de forma segura e utilizadas apenas para oferecer uma experiência personalizada, alinhada aos seus interesses.</p>
          <p>Este site não é afiliado ao Facebook ou à Meta Inc. Os resultados podem variar de pessoa para pessoa, e os depoimentos exibidos refletem experiências individuais.</p>
          <p>Seus dados estão protegidos: não compartilhamos, vendemos ou divulgamos suas informações para terceiros. Nunca enviaremos spam.</p>
        </div>
      </footer>
    </main>
  );
}
