import { useState, useMemo } from 'react'
import { ideas, categories } from './data/ideas.js'

export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [visibleCount, setVisibleCount] = useState(24)

  const filtered = useMemo(() => {
    return ideas.filter((idea) => {
      const matchesCategory = activeCategory === 'Todas' || idea.category === activeCategory
      const matchesSearch =
        search === '' ||
        idea.title.toLowerCase().includes(search.toLowerCase()) ||
        idea.description.toLowerCase().includes(search.toLowerCase()) ||
        idea.category.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  const visible = filtered.slice(0, visibleCount)

  const categoryList = ['Todas', ...categories.map((c) => c.name)]

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">
          <span className="title-icon">💡</span>
          1000 Ideias de Negócios
        </h1>
        <p className="subtitle">Encontre a inspiração perfeita para o seu próximo empreendimento</p>
      </header>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Buscar ideia, categoria ou palavra-chave..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setVisibleCount(24)
          }}
        />
      </div>

      <div className="category-filters">
        {categoryList.map((cat) => {
          const catData = categories.find((c) => c.name === cat)
          const icon = catData ? catData.icon : '🌟'
          return (
            <button
              key={cat}
              className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat)
                setVisibleCount(24)
              }}
            >
              <span className="chip-icon">{icon}</span>
              {cat}
            </button>
          )
        })}
      </div>

      <div className="results-info">
        <strong>{filtered.length}</strong> {filtered.length === 1 ? 'ideia encontrada' : 'ideias encontradas'}
      </div>

      <div className="ideas-grid">
        {visible.map((idea) => (
          <div className="idea-card" key={idea.id} style={{ borderTopColor: idea.color }}>
            <div className="idea-icon" style={{ backgroundColor: idea.color + '20' }}>
              {idea.icon}
            </div>
            <div className="idea-content">
              <span className="idea-number">#{idea.id}</span>
              <h3 className="idea-title">{idea.title}</h3>
              <span className="idea-category" style={{ color: idea.color }}>
                {idea.category}
              </span>
              <p className="idea-description">{idea.description}</p>
              <div className="idea-tags">
                <span className="tag tag-investment">💼 {idea.investment}</span>
                <span className="tag tag-difficulty">⚡ {idea.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="load-more">
          <button className="load-more-btn" onClick={() => setVisibleCount((c) => c + 24)}>
            Carregar mais ideias
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <p>Nenhuma ideia encontrada. Tente outra busca!</p>
        </div>
      )}

      <footer className="footer">
        <p>💡 1000 Ideias de Negócios — Sua próxima grande ideia começa aqui</p>
      </footer>
    </div>
  )
}
