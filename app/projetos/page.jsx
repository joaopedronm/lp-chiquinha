'use client'
import React, { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

const getStatusColor = (status) => {
  const statusLower = status.toLowerCase()
  if (statusLower.includes('executado') || statusLower.includes('concluído')) return 'bg-green-100 text-green-800'
  if (statusLower.includes('aprovado')) return 'bg-blue-100 text-blue-800'
  if (statusLower.includes('andamento')) return 'bg-yellow-100 text-yellow-800'
  return 'bg-gray-100 text-gray-800'
}

const formatType = (type) => {
  if (!type) return 'Projeto'
  return type
    .toString()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const getTypeColor = (type) => {
  if (!type) return 'bg-gray-100 text-gray-800'
  
  const normalizedType = type.toLowerCase().replace(/-/g, '')
  switch (normalizedType) {
    case 'executivo': return 'bg-blue-100 text-blue-800'
    case 'projetodelei': return 'bg-purple-100 text-purple-800'
    case 'requerimento': return 'bg-emerald-100 text-emerald-800'
    case 'indicacao': return 'bg-amber-100 text-amber-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const Projetos = () => {
  const [projetos, setProjetos] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('Todos')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "project"] | order(publishedAt desc) {
            _id,
            title,
            smallDescription,
            status,
            type,
            publishedAt,
            slug,
            "currentSlug": slug.current
          }
        `
        const data = await client.fetch(query)
        setProjetos(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredProjects = projetos.filter(projeto => {
    const statusLower = projeto.status.toLowerCase().trim()
    
    if (activeFilter === 'Todos') return true
    
    if (activeFilter === 'Aprovados') {
      return statusLower === 'aprovado'
    }
    
    if (activeFilter === 'Não Aprovados') {
      return statusLower === 'não aprovado' || statusLower === 'nao aprovado'
    }
    
    if (activeFilter === 'Executados') {
      return statusLower === 'executado'
    }
    
    return true
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <section className='min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projetos Legislativos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className='font-semibold text-accent'>Transparência em ação</span>! 
            Acompanhe aqui todas as minhas iniciativas como vereadora.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {['Todos', 'Aprovados', 'Não Aprovados', 'Executados'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === filter
                  ? 'bg-accent text-black shadow-md'
                  : 'border border-gray-300 hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Lista de Projetos */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum projeto encontrado com este filtro.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((projeto) => (
              <div 
                key={projeto._id} 
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(projeto.type)}`}>
                      {formatType(projeto.type)}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${getStatusColor(projeto.status)}`}>
                      {projeto.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 line-clamp-2 flex-grow">
                    {projeto.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {projeto.smallDescription}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                    <span>{projeto.publishedAt}</span>
                    <a 
                      href={`/projetos/${projeto.currentSlug}`} 
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      Ver detalhes →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projetos