// app/projetos/[slug]/page.js
import { client, urlFor } from '../../lib/sanity'
import { getTypeColor, getStatusColor, formatType } from '../../lib/projectHelpers'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  // Aguarda a resolução de params antes de acessar suas propriedades
  const resolvedParams = await params;
  const projeto = await getProjeto(resolvedParams.slug);
  return {
    title: `${projeto.title} | Projetos Legislativos`,
    description: projeto.smallDescription,
  };
}

async function getProjeto(slug) {
  const query = `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      smallDescription,
      status,
      type,
      publishedAt,
      body,
      image,
      slug,
      link
    }
  `
  const projeto = await client.fetch(query, { slug })
  return projeto
}

export default async function ProjetoDetalhes({ params }) {
  const resolvedParams = await params;
  const projeto = await getProjeto(resolvedParams.slug);

  if (!projeto) {
    return <div className="text-center py-12">Projeto não encontrado</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Cabeçalho */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-sm px-3 py-1 rounded-full ${getTypeColor(projeto.type)}`}>
            {formatType(projeto.type)}
          </span>
          <span className={`text-sm px-3 py-1 rounded-full capitalize ${getStatusColor(projeto.status)}`}>
            {projeto.status}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {projeto.title}
        </h1>

        <p className="text-gray-500 mb-6">
          Publicado em: {projeto.publishedAt}
        </p>

        {projeto.image && (
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={urlFor(projeto.image).url()}
              alt={projeto.image.alt || projeto.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}
      </header>

      {/* Conteúdo */}
      <div className="prose max-w-none prose-lg">
        <PortableText value={projeto.body} />
      </div>

      {/* Links Relacionados */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Links do Documento</h2>
        <Link
          href={projeto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
          {projeto.link}
        </Link>
      </div>

      {/* Botão de Voltar */}
      <div className="mt-12">
        <Link
          href="/projetos"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          ← Voltar para todos os projetos
        </Link>
      </div>
    </article>
  )
}