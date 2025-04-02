import { useState } from 'react'

const devices = [
  { id: 'desktop', label: 'Desktop', width: '100%' },
  { id: 'tablet', label: 'Tablet', width: '768px' },
  { id: 'mobile', label: 'Mobile', width: '375px' },
]

export function DevicePreview({ content }) {
  const [activeDevice, setActiveDevice] = useState('desktop')

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
          {content ? (
            <div className="h-full overflow-auto">{content}</div>
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