import { useState, useEffect } from 'react'

function TextInput({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  )
}

function ColorInput({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 p-0 border rounded"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
    </div>
  )
}

function SelectInput({ label, value, options, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function Section({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        className="flex items-center justify-between w-full mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-sm font-medium">{title}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && <div className="space-y-4">{children}</div>}
    </div>
  )
}

function NumberInput({ label, value, onChange, min, max, step = 1, unit = '' }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="number"
          value={value?.replace(unit, '')}
          onChange={(e) => onChange(e.target.value + unit)}
          min={min}
          max={max}
          step={step}
          className="w-20 px-2 py-1 border rounded"
        />
        {unit && <span className="text-sm self-center">{unit}</span>}
      </div>
    </div>
  )
}

export function PropertiesPanel({ selectedElement, onUpdate }) {
  const [properties, setProperties] = useState({
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
  })

  useEffect(() => {
    if (selectedElement) {
      setProperties({
        content: selectedElement.content || '',
        style: {
          ...properties.style,
          ...selectedElement.style,
        },
      })
    }
  }, [selectedElement])

  if (!selectedElement) {
    return (
      <div className="w-64 border-l bg-white p-4">
        <p className="text-gray-400 text-center">Select an element to edit its properties</p>
      </div>
    )
  }

  const handleChange = (changes) => {
    const updatedProperties = {
      ...properties,
      ...changes,
      style: {
        ...properties.style,
        ...(changes.style || {}),
      },
    }
    setProperties(updatedProperties)
    onUpdate(updatedProperties)
  }

  const renderContentSection = () => {
    switch (selectedElement.type) {
      case 'img':
      case 'video':
        return (
          <div>
            <label className="block text-sm mb-1">URL</label>
            <input
              type="text"
              value={properties.content || ''}
              onChange={(e) => handleChange({ content: e.target.value })}
              placeholder={`Enter ${selectedElement.type} URL`}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
        )
      case 'input':
      case 'textarea':
        return (
          <div>
            <label className="block text-sm mb-1">Placeholder</label>
            <input
              type="text"
              value={properties.content || ''}
              onChange={(e) => handleChange({ content: e.target.value })}
              placeholder="Enter placeholder text"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
        )
      default:
        return (
          <div>
            <label className="block text-sm mb-1">Content</label>
            <input
              type="text"
              value={properties.content || ''}
              onChange={(e) => handleChange({ content: e.target.value })}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
        )
    }
  }

  const renderLayoutSection = () => {
    const { type } = selectedElement
    if (type === 'grid') {
      return (
        <>
          <SelectInput
            label="Grid Columns"
            value={properties.style.gridTemplateColumns}
            options={[
              { value: '1fr', label: '1 Column' },
              { value: '1fr 1fr', label: '2 Columns' },
              { value: '1fr 1fr 1fr', label: '3 Columns' },
              { value: '1fr 1fr 1fr 1fr', label: '4 Columns' },
            ]}
            onChange={(value) => handleChange({ style: { gridTemplateColumns: value } })}
          />
          <NumberInput
            label="Gap"
            value={properties.style.gap}
            onChange={(value) => handleChange({ style: { gap: value } })}
            min={0}
            max={100}
            unit="px"
          />
        </>
      )
    }
    if (type === 'flex') {
      return (
        <>
          <SelectInput
            label="Direction"
            value={properties.style.flexDirection}
            options={[
              { value: 'row', label: 'Row' },
              { value: 'column', label: 'Column' },
            ]}
            onChange={(value) => handleChange({ style: { flexDirection: value } })}
          />
          <SelectInput
            label="Justify Content"
            value={properties.style.justifyContent}
            options={[
              { value: 'flex-start', label: 'Start' },
              { value: 'center', label: 'Center' },
              { value: 'flex-end', label: 'End' },
              { value: 'space-between', label: 'Space Between' },
              { value: 'space-around', label: 'Space Around' },
            ]}
            onChange={(value) => handleChange({ style: { justifyContent: value } })}
          />
          <SelectInput
            label="Align Items"
            value={properties.style.alignItems}
            options={[
              { value: 'stretch', label: 'Stretch' },
              { value: 'flex-start', label: 'Start' },
              { value: 'center', label: 'Center' },
              { value: 'flex-end', label: 'End' },
            ]}
            onChange={(value) => handleChange({ style: { alignItems: value } })}
          />
          <NumberInput
            label="Gap"
            value={properties.style.gap}
            onChange={(value) => handleChange({ style: { gap: value } })}
            min={0}
            max={100}
            unit="px"
          />
        </>
      )
    }
    return (
      <>
        <SelectInput
          label="Display"
          value={properties.style.display}
          options={[
            { value: 'block', label: 'Block' },
            { value: 'inline-block', label: 'Inline Block' },
            { value: 'flex', label: 'Flex' },
            { value: 'grid', label: 'Grid' },
          ]}
          onChange={(value) => handleChange({ style: { display: value } })}
        />
        <div className="grid grid-cols-2 gap-4">
          <NumberInput
            label="Width"
            value={properties.style.width}
            onChange={(value) => handleChange({ style: { width: value } })}
            min={0}
            unit="px"
          />
          <NumberInput
            label="Height"
            value={properties.style.height}
            onChange={(value) => handleChange({ style: { height: value } })}
            min={0}
            unit="px"
          />
        </div>
      </>
    )
  }

  return (
    <div className="w-64 border-l bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Properties</h2>

      <Section title="Content">
        {renderContentSection()}
      </Section>

      {selectedElement.type !== 'img' && selectedElement.type !== 'video' && (
        <Section title="Typography">
          <ColorInput
            label="Color"
            value={properties.style.color}
            onChange={(value) => handleChange({ style: { color: value } })}
          />
          <NumberInput
            label="Font Size"
            value={properties.style.fontSize}
            onChange={(value) => handleChange({ style: { fontSize: value } })}
            min={8}
            max={72}
            unit="px"
          />
          <SelectInput
            label="Font Weight"
            value={properties.style.fontWeight}
            options={[
              { value: 'normal', label: 'Normal' },
              { value: 'medium', label: 'Medium' },
              { value: 'bold', label: 'Bold' },
            ]}
            onChange={(value) => handleChange({ style: { fontWeight: value } })}
          />
          <SelectInput
            label="Text Align"
            value={properties.style.textAlign}
            options={[
              { value: 'left', label: 'Left' },
              { value: 'center', label: 'Center' },
              { value: 'right', label: 'Right' },
            ]}
            onChange={(value) => handleChange({ style: { textAlign: value } })}
          />
        </Section>
      )}

      <Section title="Layout">
        {renderLayoutSection()}
        <div className="grid grid-cols-2 gap-4">
          <NumberInput
            label="Padding"
            value={properties.style.padding}
            onChange={(value) => handleChange({ style: { padding: value } })}
            min={0}
            unit="px"
          />
          <NumberInput
            label="Margin"
            value={properties.style.margin}
            onChange={(value) => handleChange({ style: { margin: value } })}
            unit="px"
          />
        </div>
      </Section>

      <Section title="Background">
        <ColorInput
          label="Background Color"
          value={properties.style.backgroundColor}
          onChange={(value) => handleChange({ style: { backgroundColor: value } })}
        />
        <NumberInput
          label="Opacity"
          value={properties.style.opacity}
          onChange={(value) => handleChange({ style: { opacity: value } })}
          min={0}
          max={1}
          step={0.1}
        />
      </Section>

      <Section title="Border">
        <NumberInput
          label="Border Radius"
          value={properties.style.borderRadius}
          onChange={(value) => handleChange({ style: { borderRadius: value } })}
          min={0}
          unit="px"
        />
        <NumberInput
          label="Border Width"
          value={properties.style.borderWidth}
          onChange={(value) => handleChange({ style: { borderWidth: value } })}
          min={0}
          unit="px"
        />
        <ColorInput
          label="Border Color"
          value={properties.style.borderColor}
          onChange={(value) => handleChange({ style: { borderColor: value } })}
        />
        <SelectInput
          label="Border Style"
          value={properties.style.borderStyle}
          options={[
            { value: 'none', label: 'None' },
            { value: 'solid', label: 'Solid' },
            { value: 'dashed', label: 'Dashed' },
            { value: 'dotted', label: 'Dotted' },
          ]}
          onChange={(value) => handleChange({ style: { borderStyle: value } })}
        />
      </Section>

      {(selectedElement.type === 'input' || selectedElement.type === 'textarea' || selectedElement.type === 'select') && (
        <Section title="Form">
          <SelectInput
            label="Input Type"
            value={properties.type || 'text'}
            options={[
              { value: 'text', label: 'Text' },
              { value: 'email', label: 'Email' },
              { value: 'password', label: 'Password' },
              { value: 'number', label: 'Number' },
              { value: 'tel', label: 'Telephone' },
              { value: 'url', label: 'URL' },
            ]}
            onChange={(value) => handleChange({ type: value })}
          />
          <NumberInput
            label="Input Size"
            value={properties.style.width}
            onChange={(value) => handleChange({ style: { width: value } })}
            min={0}
            unit="px"
          />
        </Section>
      )}
    </div>
  )
} 