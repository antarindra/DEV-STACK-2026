import type { ITechnology } from './TechnologiesType';

interface Iselectedprops {
    Technologies: ITechnology[];
}

const SelectedCard = ({ Technologies }: Iselectedprops) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h2 className="font-bold text-lg text-gray-800">Your Stack</h2>
            <p className="text-xs text-gray-400 mb-4">{Technologies.length} Technology Selected</p>

            {Technologies.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center">
                    <p className="text-xs text-gray-400">Your stack is empty.</p>
                </div>
            ) : (
                <div className="space-y-2">
                 
                </div>
            )}
        </div>
    );
};

export default SelectedCard;