import React, { type Dispatch, type SetStateAction } from 'react';
import StackCard from './StackCard';
import type { StackType } from '../../types';

interface AllStacksProps {
    stacks: StackType[];
    selectedStacks: StackType[];
    setSelectedStacks: Dispatch<SetStateAction<StackType[]>>;
}

const AllStacks = ({ stacks, selectedStacks, setSelectedStacks }: AllStacksProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {stacks.map((stack: StackType) => (
                <StackCard
                    key={stack.id}
                    stack={stack}
                    selectedStacks={selectedStacks}
                    setSelectedStacks={setSelectedStacks}
                />
            ))}
        </div>
    );
};

export default AllStacks;