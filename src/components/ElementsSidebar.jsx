import { useState } from 'react'
import { useDrag } from 'react-dnd'

function ElementItem({ type, label, icon, collapsed }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'element',
    item: {
      type,
      content: '',
      style: {
        color: '#000000',
        backgroundColor: 'transparent',
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign: 'left',
        padding: '16px',
        margin: '0px',
        borderRadius: '0px',
        borderWidth: '0px',
        borderColor: '#000000',
        borderStyle: 'solid',
        width: 'auto',
        height: 'auto',
        opacity: '1',
        display: 'block',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
      },
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`flex items-center gap-2 p-2 rounded cursor-move hover:bg-gray-100 transition-colors ${
        isDragging ? 'opacity-50' : ''
      }`}
      title={collapsed ? label : undefined}
    >
      <span className="text-xl">{icon}</span>
      {!collapsed && <span className="text-sm">{label}</span>}
    </div>
  )
}

function ElementCategory({ title, elements, isOpen, onToggle, collapsed }) {
  return (
    <div className="mb-4">
      <button
        className={`flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded transition-colors ${
          collapsed ? 'px-3' : ''
        }`}
        onClick={onToggle}
        title={collapsed ? title : undefined}
      >
        {!collapsed && <h3 className="text-sm font-medium">{title}</h3>}
        {!collapsed && (
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        )}
      </button>
      {(isOpen || collapsed) && (
        <div className={collapsed ? 'space-y-1' : 'mt-2 space-y-1'}>
          {elements.map((element) => (
            <ElementItem key={element.type} {...element} collapsed={collapsed} />
          ))}
        </div>
      )}
    </div>
  )
}

export function ElementsSidebar({ collapsed = false }) {
  const [openCategories, setOpenCategories] = useState({
    layout: true,
    basic: true,
    media: true,
    form: true,
  })

  const toggleCategory = (category) => {
    if (!collapsed) {
      setOpenCategories((prev) => ({
        ...prev,
        [category]: !prev[category],
      }))
    }
  }

  const categories = {
    layout: {
      title: 'Layout',
      elements: [
        { type: 'div', label: 'Container', icon: '⬚' },
        { type: 'grid', label: 'Grid', icon: '▤' },
        { type: 'flex', label: 'Flex', icon: '⇿' },
      ],
    },
    basic: {
      title: 'Basic',
      elements: [
        { type: 'h1', label: 'Heading 1', icon: 'H1' },
        { type: 'h2', label: 'Heading 2', icon: 'H2' },
        { type: 'h3', label: 'Heading 3', icon: 'H3' },
        { type: 'p', label: 'Paragraph', icon: '¶' },
        { type: 'button', label: 'Button', icon: '⏺' },
        { type: 'icon', label: 'Icon', icon: '★' },
      ],
    },
    media: {
      title: 'Media',
      elements: [
        { type: 'img', label: 'Image', icon: '🖼' },
        { type: 'video', label: 'Video', icon: '▶' },
      ],
    },
    form: {
      title: 'Form',
      elements: [
        { type: 'input', label: 'Text Input', icon: '⌨' },
        { type: 'textarea', label: 'Text Area', icon: '✎' },
        { type: 'select', label: 'Select', icon: '▾' },
      ],
    },
  }

  return (
    <div className={`h-full border-r bg-white overflow-y-auto transition-all duration-300 ${
      collapsed ? 'p-2' : 'p-4'
    }`}>
      {!collapsed && <h2 className="text-lg font-semibold mb-4">Elements</h2>}
      {Object.entries(categories).map(([key, category]) => (
        <ElementCategory
          key={key}
          title={category.title}
          elements={category.elements}
          isOpen={openCategories[key]}
          onToggle={() => toggleCategory(key)}
          collapsed={collapsed}
        />
      ))}
    </div>
  )
} 