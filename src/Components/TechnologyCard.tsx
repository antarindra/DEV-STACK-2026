import { useState } from 'react';
import type { ITechnology } from './TechnologiesType';
import { FcRating } from 'react-icons/fc';
import { Bounce, toast } from 'react-toastify';

interface ICard {
    Technologies: ITechnology[];
}

const TechnologyCard = ({ Technologies }: ICard) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Technologies.map((technology: ITechnology) => (
                <SingleCard key={technology.name} technology={technology} />
            ))}
        </div>
    );
};


const SingleCard = ({ technology }: { technology: ITechnology }) => {

    const [isSelected, setIsSelected] = useState(false);
    const handleTechnology=()=>{
        setIsSelected(true);
        if(isSelected===false){
           toast.success(`${technology.name} is added successfully`, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce
});

          }
        

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
                    onClick={() => handleTechnology()}
                    className={`btn btn-neutral btn-sm w-full mt-2`}
                    disabled={isSelected}
                >
                    {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;