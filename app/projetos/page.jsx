'use client'
import React, { useState, useEffect } from 'react'
import { client } from '../lib/sanity'
import { GrDocumentText } from "react-icons/gr";

const getStatusColor = (status) => {
  const statusLower = status?.toLowerCase() || ''
  if (statusLower.includes('executado') || statusLower.includes('concluído')) return 'bg-green-300 text-black'
  if (statusLower.includes('aprovado')) return 'bg-green-100 text-black'
  if (statusLower.includes('andamento')) return 'bg-yellow-100 text-black'
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
    case 'executivo': return 'bg-blue-100 text-black'
    case 'projetodelei': return 'bg-blue-300 text-black'
    case 'requerimento': return 'bg-blue-200 text-black'
    case 'indicacao': return 'bg-amber-100 text-black'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const Projetos = () => {
  const [projetos, setProjetos] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeStatusFilter, setActiveStatusFilter] = useState('Todos')
  const [activeTypeFilter, setActiveTypeFilter] = useState('Todos')
  
  // Extrair tipos únicos para os filtros
  const statusOptions = ['Todos', 'Aprovados', 'Não Aprovados', 'Executados']
  const typeOptions = ['Todos', ...new Set(projetos.map(p => p.type ? formatType(p.type) : 'Projeto'))]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "project"] {
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
    // Filtrar por status
    const statusLower = projeto.status?.toLowerCase().trim() || ''
    let statusMatch = true
    
    if (activeStatusFilter === 'Aprovados') {
      statusMatch = statusLower === 'aprovado'
    } else if (activeStatusFilter === 'Não Aprovados') {
      statusMatch = statusLower === 'não aprovado' || statusLower === 'nao aprovado'
    } else if (activeStatusFilter === 'Executados') {
      statusMatch = statusLower === 'executado'
    } else if (activeStatusFilter !== 'Todos') {
      statusMatch = statusLower === activeStatusFilter.toLowerCase()
    }
    
    // Filtrar por tipo
    const projectType = projeto.type ? formatType(projeto.type) : 'Projeto'
    let typeMatch = activeTypeFilter === 'Todos' || projectType === activeTypeFilter
    
    return statusMatch && typeMatch
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

        {/* Filtros em Dropdown */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-auto">
            <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por Status
            </label>
            <select
              id="status-filter"
              value={activeStatusFilter}
              onChange={(e) => setActiveStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
          <div className="w-full md:w-auto">
            <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por Tipo
            </label>
            <select
              id="type-filter"
              value={activeTypeFilter}
              onChange={(e) => setActiveTypeFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {typeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="text-left mb-6 text-gray-600">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
        </div>

        {/* Lista de Projetos */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum projeto encontrado com estes filtros.</p>
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
                    <p className={`text-xs px-2 py-1 rounded-full flex items-center gap-2 ${getTypeColor(projeto.type)}`}>
                    <GrDocumentText /> <span>{formatType(projeto.type)}</span>
                    </p>
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