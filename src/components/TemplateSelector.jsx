import React from 'react'

const templates = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'A modern landing page template with hero section, features, and CTA',
    thumbnail: '🏠',
    elements: [
      {
        id: 'hero-section',
        type: 'div',
        content: '',
        style: {
          backgroundColor: '#f8fafc',
          padding: '64px',
          textAlign: 'center',
        },
        children: [
          {
            id: 'hero-heading',
            type: 'h1',
            content: 'Welcome to Our Platform',
            style: {
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '16px',
            },
          },
          {
            id: 'hero-text',
            type: 'p',
            content: 'The best solution for your business needs',
            style: {
              fontSize: '20px',
              color: '#64748b',
              marginBottom: '32px',
            },
          },
          {
            id: 'cta-button',
            type: 'button',
            content: 'Get Started',
            style: {
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 'medium',
            },
          },
        ],
      },
      {
        id: 'features-grid',
        type: 'grid',
        content: '',
        style: {
          padding: '64px',
        },
        children: [
          {
            id: 'feature-1',
            type: 'div',
            content: '✨ Easy to Use',
            style: {
              padding: '24px',
              textAlign: 'center',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            },
          },
          {
            id: 'feature-2',
            type: 'div',
            content: '🚀 Fast Performance',
            style: {
              padding: '24px',
              textAlign: 'center',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'A clean portfolio template with projects showcase',
    thumbnail: '👨‍🎨',
    elements: [
      {
        id: 'header',
        type: 'div',
        content: '',
        style: {
          padding: '32px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        },
        children: [
          {
            id: 'name',
            type: 'h1',
            content: 'John Doe',
            style: {
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1e293b',
            },
          },
          {
            id: 'title',
            type: 'p',
            content: 'Full Stack Developer',
            style: {
              color: '#64748b',
            },
          },
        ],
      },
      {
        id: 'projects',
        type: 'div',
        content: '',
        style: {
          padding: '32px',
        },
        children: [
          {
            id: 'projects-heading',
            type: 'h2',
            content: 'My Projects',
            style: {
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '24px',
            },
          },
          {
            id: 'projects-grid',
            type: 'grid',
            content: '',
            style: {
              gap: '24px',
            },
            children: [
              {
                id: 'project-1',
                type: 'div',
                content: '',
                style: {
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                },
                children: [
                  {
                    id: 'project-1-image',
                    type: 'img',
                    content: 'https://via.placeholder.com/400x300',
                    style: {
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    },
                  },
                  {
                    id: 'project-1-title',
                    type: 'h3',
                    content: 'Project One',
                    style: {
                      padding: '16px',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'A clean blog template with articles list',
    thumbnail: '📝',
    elements: [
      {
        id: 'blog-header',
        type: 'div',
        content: '',
        style: {
          padding: '48px',
          backgroundColor: '#ffffff',
          textAlign: 'center',
          borderBottom: '1px solid #e2e8f0',
        },
        children: [
          {
            id: 'blog-title',
            type: 'h1',
            content: 'My Blog',
            style: {
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1e293b',
            },
          },
          {
            id: 'blog-description',
            type: 'p',
            content: 'Thoughts, stories and ideas',
            style: {
              color: '#64748b',
              fontSize: '18px',
            },
          },
        ],
      },
      {
        id: 'articles',
        type: 'div',
        content: '',
        style: {
          padding: '48px',
          maxWidth: '768px',
          margin: '0 auto',
        },
        children: [
          {
            id: 'article-1',
            type: 'div',
            content: '',
            style: {
              marginBottom: '48px',
            },
            children: [
              {
                id: 'article-1-title',
                type: 'h2',
                content: 'Getting Started with Web Development',
                style: {
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                },
              },
              {
                id: 'article-1-excerpt',
                type: 'p',
                content: 'Learn the basics of web development and start building your first website...',
                style: {
                  color: '#64748b',
                  marginBottom: '16px',
                },
              },
              {
                id: 'article-1-button',
                type: 'button',
                content: 'Read More',
                style: {
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '4px',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

function TemplateCard({ template, onSelect }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onSelect(template)}
    >
      <div className="aspect-video bg-gray-50 flex items-center justify-center text-6xl">
        {template.thumbnail}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
        <p className="text-gray-600 text-sm">{template.description}</p>
      </div>
    </div>
  )
}

export function TemplateSelector({ onSelectTemplate }) {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Choose a Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={onSelectTemplate}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 