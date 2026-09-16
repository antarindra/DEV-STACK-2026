
import type { ITechnology } from './TechnologiesType';
import { FcRating } from 'react-icons/fc';

interface ICard {
    Technologies: ITechnology[];
}

const TechnologyCard = ({ Technologies }: ICard) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Technologies.map((Technology: ITechnology) => (
                <div key={Technology.name} className="card bg-base-100 shadow-sm border border-gray-100 p-4">
                    <div className="card-body p-2">
                        <div className="flex justify-between items-center">
                            <img src={Technology.icon} alt="" className="h-10 w-10 object-contain" />
                            <span className="badge badge-warning text-xs">{Technology.badge}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold mt-2">{Technology.name}</h2>
                        <p className="text-xs text-gray-500 line-clamp-2">{Technology.description}</p>

                        <ul className="flex justify-between items-center text-xs my-3 text-gray-600">
                            <li className="bg-gray-100 px-2 py-1 rounded">{Technology.category}</li>
                            <li>{Technology.difficulty}</li>
                            <li className="flex items-center gap-1 font-semibold">
                                <FcRating /> {Technology.rating}
                            </li>
                        </ul>

                        <button className="btn btn-neutral btn-sm w-full mt-2">Add to Stack</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechnologyCard;