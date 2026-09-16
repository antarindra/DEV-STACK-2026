import type { Dispatch, SetStateAction } from 'react';
import type { ITechnology } from './TechnologiesType';
import { FcRating } from 'react-icons/fc';
import { toast } from 'react-toastify';

interface ICard {
    Technologies: ITechnology[];
    selectedTechnology: ITechnology[];
    setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({ Technologies, selectedTechnology, setSelectedTechnology }: ICard) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Technologies.map((technology: ITechnology) => (
                <SingleCard
                    key={technology.name}
                    technology={technology}
                    selectedTechnology={selectedTechnology}
                    setSelectedTechnology={setSelectedTechnology}
                />
            ))}
        </div>
    );
};

const SingleCard = ({
    technology,
    selectedTechnology,
    setSelectedTechnology,
}: {
    technology: ITechnology;
    selectedTechnology: ITechnology[];
    setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}) => {
    
    const isExist = selectedTechnology.some((item) => item.name === technology.name);

    const handleAdd = () => {
        if (isExist) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setSelectedTechnology([...selectedTechnology, technology]);
        toast.success(`${technology.name} added to stack!`);
    };

    return (
        <div className="card bg-base-100 shadow-sm border border-gray-100 p-4">
            <div className="card-body p-2">
                <div className="flex justify-between items-center">
                    <img src={technology.icon} alt="" className="h-10 w-10 object-contain" />
                    <span className="badge badge-warning text-xs">{technology.badge}</span>
                </div>

                <h2 className="text-xl font-bold mt-2">{technology.name}</h2>
                <p className="text-xs text-gray-500 line-clamp-2">{technology.description}</p>

                <ul className="flex justify-between items-center text-xs my-3 text-gray-600">
                    <li className="bg-gray-100 px-2 py-1 rounded">{technology.category}</li>
                    <li>{technology.difficulty}</li>
                    <li className="flex items-center gap-1 font-semibold">
                        <FcRating /> {technology.rating}
                    </li>
                </ul>

                <button
                    onClick={handleAdd}
                    disabled={isExist}
                    className={`btn btn-sm w-full mt-2 ${
                        isExist ? 'btn-disabled bg-gray-200 text-gray-500' : 'btn-neutral'
                    }`}
                >
                    {isExist ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;