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
  {
    id: 'complete-website',
    name: 'Complete Website',
    description: 'A full website template with header, hero section, features, about, services, testimonials, contact form, and footer',
    thumbnail: '⭐',
    elements: [
      {
        id: 'header',
        type: 'flex',
        content: '',
        style: {
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: '0',
          zIndex: '1000'
        },
        children: [
          {
            id: 'logo',
            type: 'h1',
            content: 'Your Brand',
            style: {
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1a1a1a'
            }
          },
          {
            id: 'nav-menu',
            type: 'flex',
            content: '',
            style: {
              gap: '2rem'
            },
            children: [
              {
                id: 'nav-home',
                type: 'button',
                content: 'Home',
                style: {
                  color: '#1a1a1a',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '0.5rem 0.75rem'
                }
              },
              {
                id: 'nav-about',
                type: 'button',
                content: 'About',
                style: {
                  color: '#1a1a1a',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '0.5rem 0.75rem'
                }
              },
              {
                id: 'nav-services',
                type: 'button',
                content: 'Services',
                style: {
                  color: '#1a1a1a',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '0.5rem 0.75rem'
                }
              },
              {
                id: 'nav-contact',
                type: 'button',
                content: 'Contact',
                style: {
                  color: '#1a1a1a',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '0.5rem 0.75rem'
                }
              }
            ]
          }
        ]
      },
      {
        id: 'hero-section',
        type: 'flex',
        content: '',
        style: {
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 2rem',
          backgroundColor: '#f8fafc',
          minHeight: '80vh',
          flexDirection: 'column'
        },
        children: [
          {
            id: 'hero-content',
            type: 'flex',
            style: {
              maxWidth: '800px',
              textAlign: 'center',
              flexDirection: 'column',
              alignItems: 'center'
            },
            children: [
              {
                id: 'hero-title',
                type: 'h1',
                content: 'Welcome to Your Website',
                style: {
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#1a1a1a'
                }
              },
              {
                id: 'hero-description',
                type: 'p',
                content: 'Create something amazing with our powerful and flexible website builder.',
                style: {
                  fontSize: '1.25rem',
                  color: '#4a5568',
                  marginBottom: '2rem'
                }
              },
              {
                id: 'hero-cta',
                type: 'button',
                content: 'Get Started',
                style: {
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  fontWeight: '500'
                }
              }
            ]
          }
        ]
      },
      {
        id: 'features-section',
        type: 'flex',
        content: '',
        style: {
          padding: '4rem 2rem',
          backgroundColor: '#ffffff',
          flexDirection: 'column',
          alignItems: 'center'
        },
        children: [
          {
            id: 'features-title',
            type: 'h2',
            content: 'Our Features',
            style: {
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              textAlign: 'center'
            }
          },
          {
            id: 'features-grid',
            type: 'grid',
            content: '',
            style: {
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            },
            children: [
              {
                id: 'feature-1',
                type: 'flex',
                content: '',
                style: {
                  padding: '2rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  flexDirection: 'column'
                },
                children: [
                  {
                    id: 'feature-1-title',
                    type: 'h3',
                    content: 'Feature 1',
                    style: {
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem'
                    }
                  },
                  {
                    id: 'feature-1-text',
                    type: 'p',
                    content: 'Description of your amazing feature.',
                    style: {
                      color: '#4a5568'
                    }
                  }
                ]
              },
              {
                id: 'feature-2',
                type: 'flex',
                content: '',
                style: {
                  padding: '2rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  flexDirection: 'column'
                },
                children: [
                  {
                    id: 'feature-2-title',
                    type: 'h3',
                    content: 'Feature 2',
                    style: {
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem'
                    }
                  },
                  {
                    id: 'feature-2-text',
                    type: 'p',
                    content: 'Description of your amazing feature.',
                    style: {
                      color: '#4a5568'
                    }
                  }
                ]
              },
              {
                id: 'feature-3',
                type: 'flex',
                content: '',
                style: {
                  padding: '2rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  flexDirection: 'column'
                },
                children: [
                  {
                    id: 'feature-3-title',
                    type: 'h3',
                    content: 'Feature 3',
                    style: {
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem'
                    }
                  },
                  {
                    id: 'feature-3-text',
                    type: 'p',
                    content: 'Description of your amazing feature.',
                    style: {
                      color: '#4a5568'
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'about-section',
        type: 'flex',
        content: '',
        style: {
          padding: '4rem 2rem',
          backgroundColor: '#f8fafc',
          flexDirection: 'column',
          alignItems: 'center'
        },
        children: [
          {
            id: 'about-content',
            type: 'flex',
            content: '',
            style: {
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              flexDirection: 'column',
              alignItems: 'center'
            },
            children: [
              {
                id: 'about-title',
                type: 'h2',
                content: 'About Us',
                style: {
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '2rem',
                  color: '#1a1a1a'
                }
              },
              {
                id: 'about-text',
                type: 'p',
                content: 'Learn more about our company and our mission to help businesses succeed.',
                style: {
                  fontSize: '1.125rem',
                  color: '#4a5568',
                  lineHeight: '1.75'
                }
              }
            ]
          }
        ]
      },
      {
        id: 'contact-section',
        type: 'flex',
        content: '',
        style: {
          padding: '4rem 2rem',
          backgroundColor: '#ffffff',
          flexDirection: 'column',
          alignItems: 'center'
        },
        children: [
          {
            id: 'contact-content',
            type: 'flex',
            content: '',
            style: {
              maxWidth: '600px',
              margin: '0 auto',
              flexDirection: 'column',
              width: '100%'
            },
            children: [
              {
                id: 'contact-title',
                type: 'h2',
                content: 'Contact Us',
                style: {
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '2rem',
                  textAlign: 'center',
                  color: '#1a1a1a'
                }
              },
              {
                id: 'contact-form',
                type: 'flex',
                content: '',
                style: {
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%'
                },
                children: [
                  {
                    id: 'name-input',
                    type: 'input',
                    content: '',
                    style: {
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #e2e8f0',
                      width: '100%'
                    },
                    placeholder: 'Your Name'
                  },
                  {
                    id: 'email-input',
                    type: 'input',
                    content: '',
                    style: {
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #e2e8f0',
                      width: '100%'
                    },
                    placeholder: 'Your Email'
                  },
                  {
                    id: 'message-input',
                    type: 'textarea',
                    content: '',
                    style: {
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #e2e8f0',
                      minHeight: '150px',
                      width: '100%'
                    },
                    placeholder: 'Your Message'
                  },
                  {
                    id: 'submit-button',
                    type: 'button',
                    content: 'Send Message',
                    style: {
                      backgroundColor: '#3b82f6',
                      color: '#ffffff',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.375rem',
                      fontWeight: '500',
                      textAlign: 'center',
                      cursor: 'pointer',
                      border: 'none'
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'footer',
        type: 'flex',
        content: '',
        style: {
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          padding: '2rem',
          flexDirection: 'column',
          alignItems: 'center'
        },
        children: [
          {
            id: 'footer-content',
            type: 'flex',
            content: '',
            style: {
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '1200px',
              margin: '0 auto',
              width: '100%'
            },
            children: [
              {
                id: 'footer-copyright',
                type: 'p',
                content: '© 2024 Your Company. All rights reserved.',
                style: {
                  color: '#9ca3af'
                }
              },
              {
                id: 'footer-links',
                type: 'flex',
                content: '',
                style: {
                  gap: '2rem'
                },
                children: [
                  {
                    id: 'footer-privacy',
                    type: 'button',
                    content: 'Privacy Policy',
                    style: {
                      color: '#9ca3af',
                      backgroundColor: 'transparent',
                      border: 'none',
                      padding: '0.5rem',
                      cursor: 'pointer'
                    }
                  },
                  {
                    id: 'footer-terms',
                    type: 'button',
                    content: 'Terms of Service',
                    style: {
                      color: '#9ca3af',
                      backgroundColor: 'transparent',
                      border: 'none',
                      padding: '0.5rem',
                      cursor: 'pointer'
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
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