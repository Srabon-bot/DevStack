import React, { type Dispatch, type SetStateAction } from 'react';
import type { StackType } from '../../types';

interface SelectedStackCardProps {
    stack: StackType;
    selectedStacks: StackType[];
    setSelectedStacks: Dispatch<SetStateAction<StackType[]>>;
}

const SelectedStacksCard = ({ stack, selectedStacks, setSelectedStacks }: SelectedStackCardProps) => {

    const handleRemovedStack = (stack: StackType) => {
        const restStacks = selectedStacks.filter(
            (selectedStack) => selectedStack.id !== stack.id
        );
        setSelectedStacks(restStacks);
    };

    return (
        <div className="flex items-center justify-between bg-base-100 rounded-xl border border-[#F1F5F9] px-3 py-2">
            <div className="flex items-center gap-2">
                <img src={stack.icon} alt={stack.name} className="h-6 w-6" />
                <div>
                    <p className="text-sm font-semibold leading-tight">{stack.name}</p>
                    <p className="text-xs text-[#94A3B8] leading-tight">{stack.category}</p>
                </div>
            </div>
            <button
                onClick={() => handleRemovedStack(stack)}
                className="btn btn-ghost btn-xs btn-circle text-slate-400 hover:text-red-500"
            >
                ✕
            </button>
        </div>
    );
};

export default SelectedStacksCard;