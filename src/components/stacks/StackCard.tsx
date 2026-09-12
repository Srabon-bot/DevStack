import React, { type Dispatch, type SetStateAction } from 'react';
import type { StackType } from '../../types';

interface StackCardProps {
    stack: StackType;
    selectedStacks: StackType[];
    setSelectedStacks: Dispatch<SetStateAction<StackType[]>>;
}

const StackCard = ({ stack, selectedStacks, setSelectedStacks }: StackCardProps) => {

    const isSelected = selectedStacks.some((s) => s.id === stack.id);

    const handleStacks = () => {
        setSelectedStacks([...selectedStacks, stack]);
    };

    return (
        <div
            className={`card bg-white rounded-2xl border p-5 shadow-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-md ${
                isSelected ? "border-pink-400" : "border-[#F1F5F9]"
            }`}
        >
            <div className="flex items-center justify-between">
                <img src={stack.icon} alt={stack.name} className="h-8 w-8" />
                <div className={`badge border-none px-3 py-3 rounded-full font-medium ${stack.badgeColor}`}>
                    {stack.badge}
                </div>
            </div>

            <h2 className="text-xl font-bold mt-4">{stack.name}</h2>

            <p className="text-base-content/60 mt-2 line-clamp-3">
                {stack.description}
            </p>

            <div className="border-t border-[#F1F5F9] mt-4"></div>

            <div className="flex items-center justify-between mt-4">
                <div className={`badge border-none rounded-md px-3 py-3 font-medium ${stack.categoryColor}`}>
                    {stack.category}
                </div>
                <span className="text-base-content/70 text-sm">{stack.difficulty}</span>
                <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold">{stack.rating}</span>
                </div>
            </div>

            <button
                onClick={handleStacks}
                disabled={isSelected}
                className={`btn border rounded-lg mt-4 w-full transition-colors duration-200 font-semibold ${
                    isSelected
                        ? "bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-50"
                        : "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
                }`}
            >
                {isSelected ? "Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
};

export default StackCard;