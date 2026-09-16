import SelectedCard from "./SelectedCard";
import type { ITechnology } from "./TechnologiesType";
import TechnologyCard from "./TechnologyCard";


interface IavailableProps{
    Technologies:ITechnology[];
}

const AvailableTechnology = ({ Technologies }: IavailableProps) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6 items-start">
           
            <div className="flex-1">
                <TechnologyCard Technologies={Technologies} />
            </div>

            
            <div className="w-full lg:w-80 sticky top-20">
                <SelectedCard Technologies={[]} />
            </div>
        </div>
    );
};
export default AvailableTechnology;