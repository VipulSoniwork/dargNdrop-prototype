import { useState } from 'react'
import { useDrop, useDrag } from 'react-dnd'

function Element({ id, type, content, style, onClick, onDrop, onRemove, onMove, children }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'placed-element',
    item: { id, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['element', 'placed-element'],
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return
      }
      if (item.id) {
        onMove(item.id, id)
      } else {
        onDrop(item)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
    hover: (item, monitor) => {
      if (!monitor.isOver({ shallow: true })) {
        return
      }
    },
  }))

  const elementRef = (el) => {
    drag(el)
    drop(el)
  }

  const elementProps = {
    ref: elementRef,
    className: `group relative border border-dashed border-gray-300 p-4 mb-4 cursor-move transition-all ${
      isOver ? 'border-primary bg-primary/5' : 'hover:border-primary'
    } ${isDragging ? 'opacity-50' : ''}`,
    onClick: (e) => {
      e.stopPropagation()
      onClick()
    },
    style: {
      ...style,
      minHeight: type === 'img' ? '120px' : 'auto',
    },
  }

  const ElementControls = () => (
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2  shadow-sm rounded p-1">
      <button
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        className="bg-red-500 text-white p-1 rounded w-6 flex items-center justify-center hover:bg-red-600 transition-colors text-sm "
        title="Remove element"
      >
        ✕
      </button>
      <div className="cursor-move px-2 py-1 bg-gray-100 rounded" title="Drag to reorder">
        ⋮⋮
      </div>
    </div>
  )

  const renderElement = () => {
    switch (type) {
      case 'h1':
        return (
          <div {...elementProps}>
            <ElementControls />
            <h1 className="text-4xl font-bold">{content || 'Heading 1'}</h1>
            {children}
          </div>
        )
      case 'h2':
        return (
          <div {...elementProps}>
            <ElementControls />
            <h2 className="text-3xl font-bold">{content || 'Heading 2'}</h2>
            {children}
          </div>
        )
      case 'h3':
        return (
          <div {...elementProps}>
            <ElementControls />
            <h3 className="text-2xl font-bold">{content || 'Heading 3'}</h3>
            {children}
          </div>
        )
      case 'p':
        return (
          <div {...elementProps}>
            <ElementControls />
            <p>{content || 'Paragraph text'}</p>
            {children}
          </div>
        )
      case 'button':
        return (
          <div {...elementProps}>
            <ElementControls />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              {content || 'Button'}
            </button>
            {children}
          </div>
        )
      case 'img':
        return (
          <div {...elementProps}>
            <ElementControls />
            <div className="bg-gray-100 h-32 flex items-center justify-center rounded overflow-hidden">
              {content ? (
                <img src={content} alt="Content" className="max-h-full object-contain" />
              ) : (
                <span className="text-gray-400">Drop an image URL here</span>
              )}
            </div>
            {children}
          </div>
        )
      case 'video':
        return (
          <div {...elementProps}>
            <ElementControls />
            {content ? (
              <video controls className="w-full rounded" src={content}>
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="bg-gray-100 h-48 flex items-center justify-center rounded">
                <span className="text-gray-400">Drop a video URL here</span>
              </div>
            )}
            {children}
          </div>
        )
      case 'input':
        return (
          <div {...elementProps}>
            <ElementControls />
            <input
              type="text"
              placeholder={content || "Text input"}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {children}
          </div>
        )
      case 'textarea':
        return (
          <div {...elementProps}>
            <ElementControls />
            <textarea
              placeholder={content || "Text area"}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              rows="4"
            />
            {children}
          </div>
        )
      case 'select':
        return (
          <div {...elementProps}>
            <ElementControls />
            <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            {children}
          </div>
        )
      case 'grid':
        return (
          <div {...elementProps}>
            <ElementControls />
            <div className="grid grid-cols-2 gap-4">
              {children || (
                <>
                  <div className="border border-gray-200 p-4 rounded bg-white">Column 1</div>
                  <div className="border border-gray-200 p-4 rounded bg-white">Column 2</div>
                </>
              )}
            </div>
          </div>
        )
      case 'flex':
        return (
          <div {...elementProps}>
            <ElementControls />
            <div className="flex gap-4">
              {children || (
                <>
                  <div className="flex-1 border border-gray-200 p-4 rounded bg-white">Flex Item 1</div>
                  <div className="flex-1 border border-gray-200 p-4 rounded bg-white">Flex Item 2</div>
                </>
              )}
            </div>
          </div>
        )
      case 'icon':
        return (
          <div {...elementProps}>
            <ElementControls />
            <div className="flex justify-center">
              <span className="text-4xl">{content || '★'}</span>
            </div>
            {children}
          </div>
        )
      default:
        return (
          <div {...elementProps}>
            <ElementControls />
            {content || 'Container'}
            {children}
          </div>
        )
    }
  }

  return renderElement()
}

function renderElementWithChildren(element, onElementSelect, onAddElement, onRemoveElement, onMoveElement) {
  return (
    <Element
      key={element.id}
      {...element}
      onClick={() => onElementSelect(element)}
      onDrop={(item) => onAddElement(item, element.id)}
      onRemove={() => onRemoveElement(element.id)}
      onMove={onMoveElement}
    >
      {element.children?.map((child) =>
        renderElementWithChildren(child, onElementSelect, onAddElement, onRemoveElement, onMoveElement)
      )}
    </Element>
  )
}

export function EditorCanvas({ elementHierarchy, onElementSelect, onAddElement, onRemoveElement, onMoveElement }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['element', 'placed-element'],
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return
      }
      if (item.id) {
        onMoveElement(item.id, null)
      } else {
        onAddElement(item)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  }))

  return (
    <div
      ref={drop}
      className={`flex-1 p-8 overflow-y-auto transition-colors ${
        isOver ? 'bg-primary/5' : 'bg-white'
      }`}
    >
      {elementHierarchy.length === 0 ? (
        <div className="h-full flex items-center justify-center text-gray-400">
          <div className="text-center">
            <p className="mb-2">Drag and drop elements here</p>
            <p className="text-sm">Start building your website by adding elements from the sidebar</p>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {elementHierarchy.map((element) =>
            renderElementWithChildren(
              element,
              onElementSelect,
              onAddElement,
              onRemoveElement,
              onMoveElement
            )
          )}
        </div>
      )}
    </div>
  )
} 