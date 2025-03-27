// lib/projectHelpers.js
export function getStatusColor(status) {
  const statusLower = status?.toLowerCase().trim() || ''
  if (statusLower === 'executado') return 'bg-green-100 text-green-800'
  if (statusLower === 'aprovado') return 'bg-blue-100 text-blue-800'
  if (statusLower === 'não aprovado' || statusLower === 'nao aprovado') return 'bg-red-100 text-red-800'
  return 'bg-gray-100 text-gray-800'
}

export function formatType(type) {
  if (!type) return 'Projeto'
  return type
    .toString()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function getTypeColor(type) {
  if (!type) return 'bg-gray-100 text-gray-800'
  const normalizedType = type.toLowerCase().replace(/-/g, '')
  switch (normalizedType) {
    case 'executivo': return 'bg-blue-100 text-blue-800'
    case 'projetodelei': return 'bg-purple-100 text-purple-800'
    case 'requerimento': return 'bg-emerald-100 text-emerald-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}