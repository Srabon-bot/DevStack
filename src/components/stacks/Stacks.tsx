import React, { use, useState } from 'react';
import type { StackType } from '../../types';
import AllStacks from './AllStacks';
import SelectedStacks from './SelectedStacks';

interface StacksProps {
    stackPromise: Promise<StackType[]>;
}

const Stacks = ({ stackPromise }: StacksProps) => {
    const Stack = use(stackPromise);
    const [selectedStacks, setSelectedStacks] = useState<StackType[]>([]);

    return (
        <div className="container mx-auto px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold">
                    Explore the <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-fuchsia-600">Technologies</span>
                </h1>
                <p className="text-base-content/60 mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-1">
                    <AllStacks stacks={Stack} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />
                </div>
                <div className="w-full lg:w-72 shrink-0">
                    <SelectedStacks stacks={Stack} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />
                </div>
            </div>
        </div>
    );
};

export default Stacks;