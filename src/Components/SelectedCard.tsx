import type { Dispatch, SetStateAction } from 'react';
import type { ITechnology } from './TechnologiesType';
import { toast } from 'react-toastify';

interface Iselectedprops {
    selectedTechnology: ITechnology[];
    setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedCard = ({ selectedTechnology, setSelectedTechnology }: Iselectedprops) => {
    
    
    const handleRemove = (name: string) => {
        const removeSingleItem = selectedTechnology.filter((item) => item.name !== name);
        setSelectedTechnology(removeSingleItem);
        toast.info(`${name} removed from stack`);
    };

    
    const handleRemoveAll = () => {
        setSelectedTechnology([]);
        toast.error("Cleared all technologies from stack!");
    };

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h2 className="font-bold text-lg text-gray-800">Your Stack</h2>
            <p className="text-xs text-gray-400 mb-4">
                {selectedTechnology.length === 0
                    ? "No technologies selected yet."
                    : `${selectedTechnology.length} Technology Selected`}
            </p>

            {selectedTechnology.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center">
                    <p className="text-xs text-gray-400">Your stack is empty.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {selectedTechnology.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white"
                        >
                            <div className="flex items-center gap-3">
                                <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                                <div>
                                    <h4 className="font-semibold text-sm leading-tight">{item.name}</h4>
                                    <span className="text-[10px] text-gray-400">{item.category}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemove(item.name)}
                                className="text-gray-400 hover:text-red-500 font-bold p-1 text-sm"
                            >
                                ✕
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={handleRemoveAll}
                        className="btn btn-outline btn-error w-full mt-4 text-xs"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default SelectedCard;