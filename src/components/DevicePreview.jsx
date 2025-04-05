import { useState, useEffect, cloneElement } from 'react'

const devices = [
  { id: 'desktop', label: 'Desktop', width: '100%', scale: 1 },
  { id: 'tablet', label: 'Tablet', width: '768px', scale: 0.85 },
  { id: 'mobile', label: 'Mobile', width: '375px', scale: 0.7 },
]

// Apply responsive scaling to all elements
function applyResponsiveScaling(element, deviceScale) {
  if (!element || typeof element !== 'object' || !element.props) {
    return element;
  }

  // Clone children with scaling applied
  let newChildren = null;
  if (element.props.children) {
    if (Array.isArray(element.props.children)) {
      newChildren = element.props.children.map(child => 
        applyResponsiveScaling(child, deviceScale)
      );
    } else {
      newChildren = applyResponsiveScaling(element.props.children, deviceScale);
    }
  }

  // Get original style
  const originalStyle = element.props.style || {};
  
  // Create new style with scaled properties
  const newStyle = { ...originalStyle };
  
  // Scale font size if it exists
  if (originalStyle.fontSize) {
    const size = parseFloat(originalStyle.fontSize);
    const unit = originalStyle.fontSize.replace(size.toString(), '');
    newStyle.fontSize = `${Math.round(size * deviceScale * 100) / 100}${unit}`;
  }
  
  // Scale padding if it exists
  if (originalStyle.padding) {
    const padding = originalStyle.padding;
    if (padding.includes('px')) {
      const size = parseFloat(padding);
      newStyle.padding = `${Math.round(size * deviceScale * 100) / 100}px`;
    }
  }
  
  // Scale margin if it exists
  if (originalStyle.margin) {
    const margin = originalStyle.margin;
    if (margin.includes('px')) {
      const size = parseFloat(margin);
      newStyle.margin = `${Math.round(size * deviceScale * 100) / 100}px`;
    }
  }
  
  // Scale width if it's not percentage based
  if (originalStyle.width && originalStyle.width.includes('px')) {
    const width = parseFloat(originalStyle.width);
    newStyle.width = `${Math.round(width * deviceScale * 100) / 100}px`;
  }
  
  // Scale height if it's not percentage based
  if (originalStyle.height && originalStyle.height.includes('px')) {
    const height = parseFloat(originalStyle.height);
    newStyle.height = `${Math.round(height * deviceScale * 100) / 100}px`;
  }
  
  // Scale border radius if it exists
  if (originalStyle.borderRadius && originalStyle.borderRadius.includes('px')) {
    const radius = parseFloat(originalStyle.borderRadius);
    newStyle.borderRadius = `${Math.round(radius * deviceScale * 100) / 100}px`;
  }

  // Scale gap if it exists
  if (originalStyle.gap && originalStyle.gap.includes('px')) {
    const gap = parseFloat(originalStyle.gap);
    newStyle.gap = `${Math.round(gap * deviceScale * 100) / 100}px`;
  }
  
  // Return cloned element with new style and children
  return cloneElement(
    element,
    { ...element.props, style: newStyle },
    newChildren
  );
}

export function DevicePreview({ content }) {
  const [activeDevice, setActiveDevice] = useState('desktop')
  const [scaledContent, setScaledContent] = useState(content)
  
  useEffect(() => {
    if (content) {
      const deviceScale = devices.find(d => d.id === activeDevice)?.scale || 1;
      const responsiveContent = Array.isArray(content) 
        ? content.map(element => applyResponsiveScaling(element, deviceScale))
        : applyResponsiveScaling(content, deviceScale);
      
      setScaledContent(responsiveContent);
    } else {
      setScaledContent(null);
    }
  }, [content, activeDevice]);

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex justify-center gap-4 mb-6">
        {devices.map((device) => (
          <button
            key={device.id}
            onClick={() => setActiveDevice(device.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeDevice === device.id
                ? 'bg-gray-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {device.label}
          </button>
        ))}
      </div>

      <div className="flex-1 flex justify-center overflow-auto bg-gray-100 p-4">
        <div
          className="bg-white shadow-lg h-full transition-all duration-300"
          style={{
            width: devices.find((d) => d.id === activeDevice)?.width,
          }}
        >
          {scaledContent ? (
            <div className="h-full overflow-auto">{scaledContent}</div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              No content to preview
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 