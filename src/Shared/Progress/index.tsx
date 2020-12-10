import React, { memo } from 'react';
interface IProps {
  label?: string;
  value?: number;
}
const Progress: React.FC<IProps> = ({ label = '', value = 0 }) => {
  if (value <= 0) {
    return null;
  }
  return (
    <div className="flex flex-col flex-1 min-w-80">
      <div className="flex flex-row w-full justify-items-center my-4">
        <div className="flex flex-row w-full rounded-full bg-gray-100 shadow-sm">
          <div
            className="animate-bounce flex items-center rounded-full bg-blue-600 px-3 py-0.5 overflow-visible"
            style={{ width: `${value}%`, animationIterationCount: 1 }}
          >
            <span className="text-sm antialiased text-gray-50 capitalize whitespace-nowrap">
              {label}
            </span>
          </div>
        </div>
        <span className="text-gray-400 mx-2">{value}%</span>
      </div>
    </div>
  );
};

export default memo(Progress);
