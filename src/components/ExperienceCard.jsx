import React from 'react';

const ExperienceCard = ({ title, role, period, icon: Icon, children, className = '' }) => {
    return (
        <div className={`
      group border-2 border-black bg-white p-6 
      shadow-hard transition-all duration-200 ease-out
      hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]
      hover:border-[var(--color-primary)]
      active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
      flex flex-col h-full
      ${className}
    `}>
            <div className="flex justify-between items-start mb-6">
                <div className="border-2 border-black p-2 bg-[var(--color-secondary)] flex items-center justify-center w-12 h-12 rounded-md">
                    {Icon && <Icon className="w-6 h-6 stroke-[2] text-black" />}
                </div>
                <span className="font-space font-bold text-xs border-2 border-black px-2 py-1 bg-[var(--color-accent)] text-black">
                    {period}
                </span>
            </div>

            <h3 className="font-space font-bold text-2xl uppercase leading-tight mb-2">
                {title}
            </h3>

            {role && (
                <p className="font-inter font-semibold text-sm mb-4 uppercase tracking-wide text-gray-600">
                    {role}
                </p>
            )}

            <div className="mt-auto font-inter text-base flex-grow">
                {children}
            </div>
        </div>
    );
};

export default ExperienceCard;
