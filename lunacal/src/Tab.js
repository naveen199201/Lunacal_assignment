import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab

  const tabs = [
    { name: 'About me', content: 'This is the content of Tab 1.' },
    { name: 'Experiences', content: 'This is the content of Tab 2.' },
    { name: 'Recommended', content: 'This is the content of Tab 3.' },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 ">
      {/* Tab Buttons */}
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === index ? '  bg-gray-500 text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 '
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white border border-t-0 rounded-b-md">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${activeTab === index ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
