import type { Dispatch, SetStateAction } from "react";
import SelectedCard from "./SelectedCard";
import type { ITechnology } from "./TechnologiesType";
import TechnologyCard from "./TechnologyCard";

interface IavailableProps {
    Technologies: ITechnology[];
    selectedTechnology: ITechnology[];
    setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}

const AvailableTechnology = ({
    Technologies,
    selectedTechnology,
    setSelectedTechnology,
}: IavailableProps) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1">
                <TechnologyCard
                    Technologies={Technologies}
                    selectedTechnology={selectedTechnology}
                    setSelectedTechnology={setSelectedTechnology}
                />
            </div>

            <div className="w-full lg:w-80 sticky top-20">
                <SelectedCard
                    selectedTechnology={selectedTechnology}
                    setSelectedTechnology={setSelectedTechnology}
                />
            </div>
        </div>
    );
};

export default AvailableTechnology;