import { type Dispatch, type SetStateAction } from 'react';
import type { StackType } from '../../types';
import SelectedStacksCard from './SelectedStacksCard';
import { toast } from 'react-toastify';

interface selectedStacksPorps {
    stacks: StackType[];
    selectedStacks: StackType[];
    setSelectedStacks: Dispatch<SetStateAction<StackType[]>>;
}

const SelectedStacks = ({selectedStacks, setSelectedStacks }: selectedStacksPorps) => {

    const handleRemoveAll = () => {
        setSelectedStacks([]);
        toast.info("All technologies removed from your stack.");
    };

    return (
        <div className="bg-white rounded-2xl border border-[#F1F5F9] p-5 shadow-sm sticky top-6">
            <h2 className="font-bold text-lg">Your Stack</h2>

            {selectedStacks.length === 0 ? (
                <>
                    <p className="text-sm text-[#94A3B8] mt-1">No technologies selected yet.</p>
                    <div className="border-2 border-dashed border-[#E2E8F0] rounded-xl mt-4 py-6 text-center">
                        <p className="text-sm text-[#94A3B8]">Your stack is empty</p>
                    </div>
                </>
            ) : (
                <>
                    <p className="text-sm text-[#94A3B8] mt-1">
                        {selectedStacks.length} Technology Selected
                    </p>

                    <div className="flex flex-col gap-3 mt-4">
                        {selectedStacks.map((stack: StackType) => (
                            <SelectedStacksCard
                                key={stack.id}
                                stack={stack}
                                selectedStacks={selectedStacks}
                                setSelectedStacks={setSelectedStacks}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleRemoveAll}
                        className="btn btn-ghost text-[#D82C20] hover:bg-red-50 border border-[#ED8C85] rounded-lg w-full mt-8 text-card-md"
                    >
                        Remove All
                    </button>
                </>
            )}
        </div>
    );
};

export default SelectedStacks;