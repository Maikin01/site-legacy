import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/termos')({
  head: () => ({
    meta: [
      { title: 'Termos e Condições de Uso | Legacy Community' },
      { name: 'description', content: 'Regras de acesso e utilização da Legacy Community.' },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="terms-page">
      <div className="terms-shell">
        <header className="terms-header">
          <a className="terms-brand" href="/" aria-label="Voltar para a página inicial da Legacy">
            <img src="/legacy-logo.webp" alt="" width="640" height="640" decoding="async" />
            <span>LEGACY COMMUNITY</span>
          </a>
          <a className="terms-back" href="/">Voltar ao site</a>
        </header>

        <article className="terms-card">
          <p className="terms-eyebrow">DOCUMENTO LEGAL</p>
          <h1>Termos e Condições de Uso</h1>
          <p className="terms-updated">Última atualização: 7 de setembro de 2026</p>

          <p className="terms-intro">
            Ao adquirir ou utilizar o acesso à Legacy Community, você confirma que leu, compreendeu e concorda com as condições apresentadas abaixo. Leia este documento com atenção antes de concluir a contratação.
          </p>

          <section className="terms-section">
            <h2>1. Sobre a Legacy Community</h2>
            <p><strong>1.1.</strong> A Legacy é uma comunidade privada que reúne, organiza e apresenta referências, links e informações disponíveis na internet, com finalidade informativa e educacional.</p>
            <p><strong>1.2.</strong> Salvo quando indicado expressamente, a Legacy não é autora nem proprietária dos materiais de terceiros referenciados na comunidade e não transfere ao usuário direitos sobre essas obras.</p>
            <p><strong>1.3.</strong> A contratação corresponde ao acesso à comunidade, à organização das informações e aos recursos próprios oferecidos pela Legacy. Ela não representa a compra individual de cursos, arquivos ou direitos de propriedade intelectual de terceiros.</p>
          </section>

          <section className="terms-section">
            <h2>2. Uso responsável</h2>
            <p><strong>2.1.</strong> O acesso é destinado ao uso pessoal do titular da contratação. O usuário deve utilizar a plataforma e as referências nela encontradas de forma lícita e responsável.</p>
            <p><strong>2.2.</strong> É proibido reproduzir, vender, licenciar, compartilhar ou redistribuir materiais protegidos sem a autorização de seus respectivos titulares, observando-se a Lei nº 9.610/1998 e as demais normas aplicáveis.</p>
            <p><strong>2.3.</strong> O usuário responde pelos atos que praticar e por eventuais danos causados a terceiros, sem prejuízo das responsabilidades que a legislação atribuir diretamente à Legacy.</p>
          </section>

          <section className="terms-section">
            <h2>3. Conteúdos e links de terceiros</h2>
            <p><strong>3.1.</strong> Links externos podem levar a páginas, arquivos ou serviços administrados por terceiros. A disponibilidade, a segurança, a legalidade e as políticas desses ambientes não são controladas pela Legacy.</p>
            <p><strong>3.2.</strong> A presença de uma referência na comunidade não significa parceria, endosso, autorização comercial ou vínculo com o autor ou produtor do conteúdo.</p>
            <p><strong>3.3.</strong> Solicitações relacionadas a direitos, remoções ou determinações legais serão analisadas e tratadas de acordo com a legislação aplicável, incluindo o Marco Civil da Internet (Lei nº 12.965/2014).</p>
          </section>

          <section className="terms-section">
            <h2>4. Limites e disponibilidade</h2>
            <p><strong>4.1.</strong> A Legacy não garante que links externos permanecerão disponíveis, pois eles podem ser modificados ou removidos por seus responsáveis sem aviso prévio.</p>
            <p><strong>4.2.</strong> A comunidade não autoriza nem incentiva a exploração comercial de materiais de terceiros. Quem decidir utilizá-los comercialmente deverá obter as permissões necessárias e cumprir todas as obrigações legais e tributárias aplicáveis.</p>
            <p><strong>4.3.</strong> Nenhuma disposição destes termos exclui ou limita direitos e responsabilidades que não possam ser afastados por lei.</p>
          </section>

          <section className="terms-section">
            <h2>5. Pagamento e obrigações fiscais</h2>
            <p><strong>5.1.</strong> Preços, formas de pagamento e condições da oferta são apresentados antes da conclusão da compra.</p>
            <p><strong>5.2.</strong> Os documentos fiscais serão emitidos quando exigidos pela legislação e pelo regime tributário aplicável à operação.</p>
            <p><strong>5.3.</strong> Obrigações fiscais decorrentes de atividades próprias do usuário, inclusive eventual comercialização realizada por sua conta, são de responsabilidade do próprio usuário.</p>
          </section>

          <section className="terms-section">
            <h2>6. Cancelamento e reembolso</h2>
            <p><strong>6.1.</strong> Nas contratações realizadas pela internet, o consumidor poderá exercer o direito de arrependimento no prazo previsto no artigo 49 do Código de Defesa do Consumidor, quando aplicável.</p>
            <p><strong>6.2.</strong> Garantias adicionais eventualmente oferecidas seguirão as condições e os prazos informados na página de compra.</p>
          </section>

          <section className="terms-section">
            <h2>7. Privacidade e comunicação</h2>
            <p><strong>7.1.</strong> Os dados fornecidos são utilizados para processar o acesso, prestar suporte, proteger a plataforma e realizar comunicações relacionadas à Legacy.</p>
            <p><strong>7.2.</strong> Dados pessoais não serão vendidos. Eles poderão ser compartilhados com fornecedores essenciais à operação, como plataformas de pagamento e comunicação, ou quando houver obrigação legal.</p>
            <p><strong>7.3.</strong> O usuário poderá solicitar o cancelamento de comunicações promocionais pelos canais disponibilizados em cada mensagem.</p>
          </section>

          <section className="terms-section">
            <h2>8. Avisos importantes</h2>
            <p><strong>8.1.</strong> Este site não pertence ao Facebook ou à Meta Platforms, Inc., não integra seus serviços e não é endossado por essas empresas.</p>
            <p><strong>8.2.</strong> Depoimentos e exemplos representam experiências individuais. Resultados dependem do contexto, da dedicação, das decisões e da aplicação de cada pessoa, portanto não constituem promessa de desempenho.</p>
          </section>

          <section className="terms-section">
            <h2>9. Aceite e atualizações</h2>
            <p><strong>9.1.</strong> Ao concluir a contratação ou continuar utilizando a comunidade, o usuário declara sua concordância com estes termos.</p>
            <p><strong>9.2.</strong> Estes termos podem ser atualizados para refletir mudanças na operação ou na legislação. A versão vigente ficará sempre disponível nesta página.</p>
            <p><strong>9.3.</strong> Caso não concorde com estas condições, o usuário não deverá contratar ou continuar utilizando o acesso, sem prejuízo dos direitos assegurados por lei.</p>
          </section>

          <p className="terms-note">© 2026 Legacy Community — Todos os direitos reservados.</p>
        </article>
      </div>
    </main>
  );
}
