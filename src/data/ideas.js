// Generates 1000 unique business ideas in Portuguese
// Each idea: { id, title, category, description, investment, difficulty }

const categories = [
  { name: 'Tecnologia', icon: '💻', color: '#3b82f6' },
  { name: 'Alimentação', icon: '🍔', color: '#f59e0b' },
  { name: 'Saúde', icon: '🏥', color: '#ef4444' },
  { name: 'Educação', icon: '📚', color: '#8b5cf6' },
  { name: 'Moda', icon: '👗', color: '#ec4899' },
  { name: 'Serviços', icon: '🔧', color: '#6b7280' },
  { name: 'Sustentabilidade', icon: '🌱', color: '#22c55e' },
  { name: 'Pet', icon: '🐾', color: '#f97316' },
  { name: 'Beleza', icon: '💄', color: '#d946ef' },
  { name: 'Casa & Decoração', icon: '🏠', color: '#14b8a6' },
  { name: 'Entretenimento', icon: '🎮', color: '#a855f7' },
  { name: 'Finanças', icon: '💰', color: '#eab308' },
  { name: 'Transporte', icon: '🚗', color: '#6366f1' },
  { name: 'Turismo', icon: '✈️', color: '#0ea5e9' },
  { name: 'Agricultura', icon: '🌾', color: '#84cc16' },
  { name: 'Esportes', icon: '⚽', color: '#f43f5e' },
  { name: 'Música & Arte', icon: '🎨', color: '#c026d3' },
  { name: 'Infantil', icon: '🧸', color: '#fb923c' },
  { name: 'Digital', icon: '📱', color: '#3b82f6' },
  { name: 'Imobiliário', icon: '🏢', color: '#78716c' },
]

const formats = [
  'plataforma online de', 'serviço de', 'loja especializada em', 'consultoria de',
  'aplicativo para', 'marketplace de', 'agência de', 'startup de',
  'marca de', 'estúdio de', 'clínica de', 'escola de',
  'assinatura mensal de', 'serviço delivery de', 'franquia de',
  'comunidade online de', 'serviço de aluguel de', 'atelier de',
  'buffet de', 'cooperativa de',
]

const niches = [
  'produtos artesanais', 'comida vegana', 'fisioterapia domiciliar', 'aulas de programação',
  'roupas plus size', 'limpeza residencial', 'produtos reciclados', 'banho e tosa',
  'maquiagem profissional', 'móveis planejados', 'jogos para idosos', 'consultoria financeira',
  'carros elétricos', 'roteiros ecoturísticos', 'hidroponia', 'treino funcional',
  'ilustração digital', 'brinquedos educativos', 'marketing digital', 'gestão de condomínios',
  'segurança cibernética', 'bolos caseiros', 'nutrição esportiva', 'cursos de idiomas',
  'acessórios personalizados', 'encanador 24h', 'energia solar', 'pet hotel',
  'skincare natural', 'decoração minimalista', 'eventos corporativos', 'investimentos em cripto',
  'motos compartilhadas', 'hospedagem rural', 'cultivo de cogumelos', 'aulas de yoga',
  'produção musical', 'moda infantil', 'gestão de redes sociais', 'locação de imóveis',
  'desenvolvimento de apps', 'congelados saudáveis', 'acompanhamento de idosos', 'reforço escolar',
  'calçados sustentáveis', 'paisagismo', 'compostagem', 'adestramento',
  'corte de cabelo masculino', 'iluminação decorativa', 'escape room', 'microcrédito',
  'fretes sob demanda', 'câmbio de moedas', 'passeios gastronômicos', 'apiário',
  'crossfit', 'tatuagem', 'festa infantil', 'design de logos',
  'ecommerce de roupas', 'hamburguer artesanal', 'pilates', 'educação infantil',
  'moda íntima', 'dedetização', 'produtos biodegradáveis', 'veterinária 24h',
  'manicure em domicílio', 'cortinas e persianas', 'aluguel de videogames', 'planejamento financeiro',
  'transfer executivo', 'camping', 'horta comunitária', 'surf',
  'artesanato em cerâmica', 'fraldas ecológicas', 'automação de marketing', 'administração de aluguéis',
  'chatbots para empresas', 'marmita fitness', 'acupuntura', 'aulas de música',
  'styling pessoal', 'mudanças residenciais', 'coleta de óleo usado', 'creche para cães',
  'barbearia', 'tapetes personalizados', 'stand-up comedy', 'consórcios',
  'pedidos de taxi', 'guias turísticos', 'produção de mel', 'natação',
  'pintura de telas', 'roupas de bebê', 'consultoria de vendas', 'venda de terrenos',
  'segurança de dados', 'doces artesanais', 'massoterapia', 'cursos online',
  'bolsas e carteiras', 'serviço de garçom', 'papel reciclado', 'pet shop online',
  'depilação', 'organização de closets', 'karaokê', 'contabilidade online',
  'logística reversa', 'passeio com cães', 'açaí na tigela', 'judô',
  'fotografia de eventos', 'cama mesinha banho', 'marketing de influência', 'intermediação de compra',
  'desenvolvimento web', 'food truck', 'dentista estético', 'mentoria profissional',
  'moda praia', 'jardinagem', 'produtos orgânicos', 'adoção de pets',
  'salão de beleza', 'revestimento 3D', 'produção de eventos', 'crédito pessoal',
  'moto frete', 'reservas de hotel', 'plantação de ervas', 'futebol society',
  'escultura', 'festa temática', 'gestão de tráfego', 'loja de móveis',
  'consultoria de TI', 'marmita congelada', 'terapia ocupacional', 'escola de robótica',
  'costura sob medida', 'eletricista', 'papelaria criativa', 'acupuntura veterinária',
  'maquiagem para noivas', 'papel de parede', 'cinema ao ar livre', 'investimentos imobiliários',
  'carona solidária', 'intercâmbio', 'cultivo de microverdes', 'boxe',
  'gravação de podcasts', 'berçário', 'copywriting', 'leilão de imóveis',
  'manutenção de computadores', 'sanduíches naturais', 'fonoaudiologia', 'aulas particulares',
  't-shirts estampadas', 'diarista', 'reciclagem de eletrônicos', 'hospedagem para pets',
  'design de sobrancelhas', 'tapetes artesanais', 'teatro amador', 'consultoria fiscal',
  'transporte de carga', 'pousada', 'feira orgânica', 'corrida de rua',
  'customização de roupas', 'quarto de bebê', 'social media', 'avaliação de imóveis',
  'cloud computing', 'iogurte artesanal', 'psicologia', 'cursinho pré-vestibular',
  'moda gospel', 'lavanderia', 'sabão ecológico', 'corte de árvores',
  'alongamento de unhas', 'quadros decorativos', 'festival de música', 'finanças pessoais',
  'frota compartilhada', 'city tour', 'composteira doméstica', 'personal trainer',
  'serigrafia', 'recreação infantil', 'SEO', 'compra e venda de carros',
  'suporte técnico', 'churrasco delivery', 'drenagem linfática', 'curso de redação',
  'moda sustentável', 'impermeabilização', 'horta vertical', 'treinamento de cães',
  'coloração', 'móveis de madeira de demolição', 'show de mágica', 'gestão de cartão',
  'carros de luxo', 'agriturismo', 'cogumelos shiitake', 'luta livre',
  'artesanato em couro', 'roupas de festa infantil', 'email marketing', 'aluguel de salas',
  'desenvolvimento de software', 'sorvete artesanal', 'estética facial', 'educação ambiental',
  'joias', 'encanador', 'upcycling', 'banho e tosa a domicílio',
  'trancista', 'reforma de móveis', 'circo', 'planejador financeiro',
  'montagem de móveis', 'trilha ecológica', 'cultivo de lavanda', 'capoeira',
  'desenho arquitetônico', 'carrinho de bebê', 'consultoria de imagem', 'permuta de imóveis',
  'auditoria de sistemas', 'pão de queijo', 'quiropraxia', 'escola de música',
  'moda masculina', 'pintura predial', 'sacos biodegradáveis', 'pet food',
  'barba', 'cortinas', 'música ao vivo', 'seguros',
  'moto delivery', 'ecolodge', 'vermicompostagem', 'esportes radicais',
  'serigrafia em camisetas', 'educação sexual', 'anúncios no Google', 'gestão de obra',
  'inteligência artificial', 'caldos caseiros', 'home care', 'educação financeira',
  'moda feminina', 'faxina', 'reciclagem de papel', 'creche para gatos',
  'progressiva', 'decoração de festas', 'dança de salão', 'factoring',
  'carros antigos', 'rota gastronômica', 'horta escolar', 'muay thai',
  'artesanato em madeira', 'cama elástica', 'tráfego pago', 'locação de equipamentos',
  'backup de dados', 'comida árabe', 'ozonioterapia', 'curso de inglês',
  'moda jeans', 'limpeza de estofados', 'pneus reciclados', 'adestramento de cães',
  'manicure', 'luminárias', 'orquestra', 'consórcio imobiliário',
  'bicicletas elétricas', 'guias locais', 'cogumelos medicinais', 'ginástica',
  'pintura em tela', 'fraldas', 'marketing de conteúdo', 'imóveis de praia',
  'cybersecurity', 'comida japonesa', 'podologia', 'cursos técnicos',
  'moda praiana', 'piscinas', 'sacolas retornáveis', 'caminhada guiada',
  'escova modeladora', 'tapetes', 'comédia', 'previdência privada',
  'carros elétricos compartilhados', 'tour de vinícolas', 'microgreens', 'cross training',
  'artesanato em feltro', 'carrinho de passeio', 'consultoria de marca', 'aluguel de galpões',
  'big data', 'marmitas diet', 'fisioterapia', 'escola bilíngue',
  'moda fitness', 'dedetizadora', 'óleo de cozinha reciclado', 'hotel para gatos',
  'maquiagem artística', 'revestimento de parede', 'palhaçaria', 'gestão de investimentos',
  'fretado de empresa', 'glamping', 'chás funcionais', 'tênis',
  'artesanato em biscuit', 'cangas', 'marketing digital', 'venda de apartamentos',
  'desenvolvimento mobile', 'comida italiana', 'massagem relaxante', 'escola de dança',
  'moda plus', 'jardinagem paisagística', 'reciclagem de plástico', 'banho e tosa para gatos',
  'cilios', 'móveis rústicos', 'teatro de fantoches', 'câmbio de moedas',
  'carros autônomos', 'rota de cervejas', 'agrofloresta', 'skate',
  'artesanato em crochê', 'mamadeiras', 'marketing de afiliados', 'locação de casas',
  'blockchain', 'comida mexicana', 'reflexologia', 'escola de artes',
  'moda esportiva', 'limpeza de fossas', 'compostagem urbana', 'pet walker',
  'design de cabelo', 'quadros', 'show de calouros', 'gestão de risco',
  'carros de colecionador', 'passeio de barco', 'cogumelos secos', 'basquete',
  'artesanato em pedra', 'banho de sol', 'SEO local', 'lojas virtuais',
  'realidade virtual', 'comida nordestina', 'acupuntura estética', 'escola de culinária',
  'moda inverno', 'reforma de banheiros', 'sustentabilidade urbana', 'creche pet',
  'escova progressiva', 'móveis infantis', 'balé', 'consultoria tributária',
  'carros de passeio', 'rota de cafés', 'cogumelos shimeji', 'futsal',
  'artesanato em vidro', 'cadeirinha de bebê', 'marketing de relacionamento', 'imóveis comerciais',
  'internet das coisas', 'comida mineira', 'terapia holística', 'escola de teatro',
  'moda verão', 'limpeza de fachadas', 'reciclagem de metal', 'hotel para aves',
  'penteados', 'luminárias de madeira', 'música clássica', 'gestão de patrimônio',
  'carros de luxo compartilhados', 'rota gastronômica noturna', 'cogumelos pleurotus', 'vôlei',
  'artesanato em metal', 'carrinho de compras', 'marketing de guerrilha', 'locação de salas comerciais',
  'machine learning', 'comida caseira', 'auriculoterapia', 'escola de música para crianças',
  'moda íntima feminina', 'impermeabilização de telhados', 'reciclagem de vidro', 'banho e tosa para aves',
  'escova de cabelo', 'móveis de pallet', 'circo infantil', 'gestão de carteira',
  'carros de passeio compartilhados', 'rota de cafés especiais', 'cogumelos reishi', 'handebol',
  'artesanato em tecido', 'carrinho de mão', 'marketing de influência digital', 'locação de galpões',
  'data science', 'comida de boteco', 'terapia de cristais', 'escola de circo',
  'moda praia feminina', 'limpeza de caixas de gordura', 'reciclagem de baterias', 'creche para aves',
  'escova de dente', 'móveis de madeira maciça', 'teatro de rua', 'gestão de fundos',
  'carros de passeio de luxo', 'rota de chocolates', 'cogumelos cogumelos', 'tênis de mesa',
  'artesanato em barro', 'carrinho de brinquedo', 'marketing de conteúdo digital', 'locação de lojas',
  'inteligência artificial para negócios', 'comida de rua', 'terapia de reiki', 'escola de pintura',
  'moda praia masculina', 'impermeabilização de paredes', 'reciclagem de pneus', 'banho e tosa para répteis',
  'escova de cabelo profissional', 'móveis de madeira de demolição', 'circo de rua', 'gestão de investimentos imobiliários',
  'carros de passeio de luxo compartilhados', 'rota de cafés especiais de luxo', 'cogumelos cogumelos medicinais', 'futebol de mesa',
  'artesanato em barro artesanal', 'carrinho de brinquedo de madeira', 'marketing de conteúdo digital para negócios', 'locação de lojas comerciais',
]

const investments = ['Baixo', 'Médio', 'Alto']
const difficulties = ['Fácil', 'Moderado', 'Complexo']

const descriptions = [
  'Uma oportunidade de negócio com baixa barreira de entrada e alto potencial de crescimento no mercado atual.',
  'Atenda uma demanda crescente do público brasileiro com um modelo de negócio escalável e rentável.',
  'Explore um nicho de mercado em expansão com poucos concorrentes e grande potencial de lucratividade.',
  'Transforme uma paixão em uma fonte de renda estável e sustentável a longo prazo.',
  'Aproveite as tendências de consumo digital para criar um negócio moderno e conectado.',
  'Ofereça um serviço essencial que as pessoas procuram diariamente em sua região.',
  'Crie valor real para os clientes com um produto ou serviço diferenciado e de qualidade.',
  'Invista em um segmento com demanda constante e baixa sazonalidade para garantir estabilidade.',
  'Monte um negócio flexível que permite começar pequeno e crescer conforme os resultados aparecem.',
  'Atenda um público específico com necessidades mal resolvidas pelos grandes players do mercado.',
]

function generateIdeas() {
  const ideas = []
  let id = 1

  for (let i = 0; i < niches.length && id <= 1000; i++) {
    const categoryIndex = i % categories.length
    const category = categories[categoryIndex]
    const format = formats[i % formats.length]
    const niche = niches[i]
    const investment = investments[i % investments.length]
    const difficulty = difficulties[i % difficulties.length]
    const description = descriptions[i % descriptions.length]

    ideas.push({
      id: id++,
      title: `${capitalize(format)} ${niche}`,
      category: category.name,
      icon: category.icon,
      color: category.color,
      description,
      investment,
      difficulty,
    })
  }

  // If we still need more, generate variations
  while (id <= 1000) {
    const categoryIndex = (id - 1) % categories.length
    const category = categories[categoryIndex]
    const format = formats[(id - 1) % formats.length]
    const niche = niches[(id - 1) % niches.length]
    const suffix = Math.floor((id - 1) / niches.length)
    const investment = investments[(id - 1) % investments.length]
    const difficulty = difficulties[(id - 1) % difficulties.length]
    const description = descriptions[(id - 1) % descriptions.length]

    ideas.push({
      id: id++,
      title: `${capitalize(format)} ${niche} ${suffix > 0 ? `(${suffix + 1})` : ''}`,
      category: category.name,
      icon: category.icon,
      color: category.color,
      description,
      investment,
      difficulty,
    })
  }

  return ideas.slice(0, 1000)
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const ideas = generateIdeas()
export { categories }
