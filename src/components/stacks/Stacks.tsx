import { use, useState } from 'react';
import type { StackType } from '../../types';
import AllStacks from './AllStacks';
import SelectedStacks from './SelectedStacks';
import Gradient from '../Gradient';

interface StacksProps {
    stackPromise: Promise<StackType[]>;
}

const Stacks = ({ stackPromise }: StacksProps) => {
    const Stack = use(stackPromise);
    const [selectedStacks, setSelectedStacks] = useState<StackType[]>([]);

    return (
        <div className="container mx-auto px-4">
            <div className="mb-8 text-center lg:text-left">
                <h1 className="font-inter text-2xl sm:text-3xl font-extrabold">
                    Explore the <Gradient as="span" variant="text">Technologies</Gradient>
                </h1>
                <p className="text-base-content/60 mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-1 w-full">
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