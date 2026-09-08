const questions = [
  {
    question: 'Como acesso a comunidade?',
    answer:
      'Depois que o pagamento for aprovado, você receberá por e-mail as orientações e os links oficiais para entrar nos canais da Legacy no Discord e no Telegram.',
  },
  {
    question: 'É seguro?',
    answer:
      'Sim. Você terá 7 dias para conhecer a Legacy por dentro. Se decidir que a comunidade não é para você, poderá solicitar o reembolso integral dentro desse prazo.',
  },
  {
    question: 'O acesso é vitalício?',
    answer:
      'Sim. O pagamento é feito uma única vez e libera o acesso vitalício à comunidade, sem cobrança mensal recorrente.',
  },
  {
    question: 'Como funciona o suporte?',
    answer:
      'Quando precisar de ajuda, você poderá falar com a equipe pelos canais oficiais de suporte no WhatsApp, por e-mail ou dentro do Discord.',
  },
  {
    question: 'O conteúdo é sempre atualizado?',
    answer:
      'Sim. Novos materiais e recursos são adicionados à comunidade regularmente, e os membros recebem essas atualizações sem precisar fazer uma nova compra.',
  },
];

export function LegacyFaq() {
  return (
    <div className="faq-list">
      {questions.map((item) => (
        <details key={item.question} className="faq-item">
          <summary className="faq-summary">
            <span><b>?</b>{item.question}</span>
            <i>⌄</i>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
