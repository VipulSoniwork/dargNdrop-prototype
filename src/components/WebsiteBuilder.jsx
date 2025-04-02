import { useState, useCallback } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { ElementsSidebar } from "./ElementsSidebar"
import { EditorCanvas } from "./EditorCanvas"
import { PropertiesPanel } from "./PropertiesPanel"
import { DevicePreview } from "./DevicePreview"
import { TemplateSelector } from "./TemplateSelector"

function Tabs({ value, onValueChange, children }) {
  return <div className="flex items-center">{children}</div>
}

function TabsList({ children }) {
  return <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">{children}</div>
}

function TabsTrigger({ value, active, children, onClick }) {
  return (
    <button
      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
        active
          ? "bg-white text-primary shadow-sm"
          : "text-gray-600 hover:text-primary"
      }`}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  )
}

function createElementHierarchy(elements) {
  const elementMap = new Map()
  const rootElements = []

  // Create a map of all elements
  elements.forEach(element => {
    elementMap.set(element.id, { ...element, children: [] })
  })

  // Build the hierarchy
  elements.forEach(element => {
    const elementWithChildren = elementMap.get(element.id)
    if (element.parentId) {
      const parent = elementMap.get(element.parentId)
      if (parent) {
        parent.children.push(elementWithChildren)
      }
    } else {
      rootElements.push(elementWithChildren)
    }
  })

  return rootElements
}

function flattenElements(elements, parentId = null) {
  let flattened = []
  elements.forEach((element) => {
    const { children, ...elementWithoutChildren } = element
    const elementWithParent = {
      ...elementWithoutChildren,
      parentId: parentId,
    }
    flattened.push(elementWithParent)
    if (children && children.length > 0) {
      flattened = flattened.concat(flattenElements(children, element.id))
    }
  })
  return flattened
}

export function WebsiteBuilder() {
  const [activeTab, setActiveTab] = useState("templates")
  const [selectedElement, setSelectedElement] = useState(null)
  const [elements, setElements] = useState([])
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isPropertiesPanelCollapsed, setIsPropertiesPanelCollapsed] = useState(false)

  const handleTemplateSelect = (template) => {
    const flattenedElements = flattenElements(template.elements)
    setElements(flattenedElements)
    setActiveTab("editor")
  }

  const handleElementUpdate = (updatedProperties) => {
    if (selectedElement) {
      setElements((prevElements) =>
        prevElements.map((element) =>
          element.id === selectedElement.id
            ? { ...element, ...updatedProperties }
            : element
        )
      )
    }
  }

  const handleAddElement = (newElement, targetId = null) => {
    const elementToAdd = {
      ...newElement,
      id: Date.now().toString(),
      parentId: targetId,
      style: {
        ...newElement.style,
      },
    }

    setElements((prevElements) => [...prevElements, elementToAdd])
  }

  const handleRemoveElement = (elementId) => {
    setElements((prevElements) => {
      const elementIdsToRemove = new Set()
      
      const addElementAndChildren = (id) => {
        elementIdsToRemove.add(id)
        prevElements.forEach((element) => {
          if (element.parentId === id) {
            addElementAndChildren(element.id)
          }
        })
      }
      
      addElementAndChildren(elementId)
      
      return prevElements.filter((element) => !elementIdsToRemove.has(element.id))
    })

    if (selectedElement?.id === elementId) {
      setSelectedElement(null)
    }
  }

  const handleMoveElement = useCallback((elementId, newParentId) => {
    setElements((prevElements) => {
      const movedElement = prevElements.find((el) => el.id === elementId)
      if (!movedElement) return prevElements

      // Don't allow moving an element into its own descendant
      let currentParentId = newParentId
      while (currentParentId) {
        if (currentParentId === elementId) return prevElements
        const parent = prevElements.find((el) => el.id === currentParentId)
        currentParentId = parent?.parentId
      }

      return prevElements.map((element) =>
        element.id === elementId
          ? { ...element, parentId: newParentId }
          : element
      )
    })
  }, [])

  const elementHierarchy = createElementHierarchy(elements)

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <header className="border-b bg-white px-6 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Website Builder</h1>
          <div className="flex items-center gap-4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger
                  value="templates"
                  active={activeTab === "templates"}
                  onClick={setActiveTab}
                >
                  Templates
                </TabsTrigger>
                <TabsTrigger
                  value="editor"
                  active={activeTab === "editor"}
                  onClick={setActiveTab}
                >
                  Editor
                </TabsTrigger>
                <TabsTrigger
                  value="preview"
                  active={activeTab === "preview"}
                  onClick={setActiveTab}
                >
                  Preview
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
              Save
            </button>
          </div>
        </div>
      </header>

      <DndProvider backend={HTML5Backend}>
        <div className="flex-1 overflow-hidden">
          {activeTab === "templates" && (
            <TemplateSelector onSelectTemplate={handleTemplateSelect} />
          )}
          {activeTab === "editor" && (
            <div className="flex h-full">
              <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'w-12' : 'w-64'}`}>
                <div className="relative h-full">
                  <button
                    className="absolute -right-3 top-4 z-10 rounded-full bg-white p-1 shadow-md"
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                  >
                    {isSidebarCollapsed ? '→' : '←'}
                  </button>
                  <ElementsSidebar collapsed={isSidebarCollapsed} />
                </div>
              </div>
              <EditorCanvas
                elementHierarchy={elementHierarchy}
                onAddElement={handleAddElement}
                onElementSelect={setSelectedElement}
                onRemoveElement={handleRemoveElement}
                onMoveElement={handleMoveElement}
              />
              <div className={`transition-all duration-300 ${isPropertiesPanelCollapsed ? 'w-12' : 'w-64'}`}>
                <div className="relative h-full">
                  <button
                    className="absolute -left-3 top-4 z-10 rounded-full bg-white p-1 shadow-md"
                    onClick={() => setIsPropertiesPanelCollapsed(!isPropertiesPanelCollapsed)}
                  >
                    {isPropertiesPanelCollapsed ? '←' : '→'}
                  </button>
                  <PropertiesPanel
                    selectedElement={selectedElement}
                    onUpdate={handleElementUpdate}
                    collapsed={isPropertiesPanelCollapsed}
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === "preview" && (
            <DevicePreview
              content={
                <div className="max-w-5xl mx-auto p-8">
                  {elementHierarchy.map((element) => (
                    <div
                      key={element.id}
                      style={element.style}
                    >
                      {element.content}
                      {element.children?.map((child) => (
                        <div
                          key={child.id}
                          style={child.style}
                        >
                          {child.content}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              }
            />
          )}
        </div>
      </DndProvider>
    </div>
  )
} 