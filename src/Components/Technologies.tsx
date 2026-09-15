import AvailableTechnology from "./AvailableTechnology";
import type { ITechnology } from "./TechnologiesType";

interface technologyProps{
    technologiesPromise:Promise<ITechnology[]>;
}

const Technologies = ({technologiesPromise}:technologyProps) => {
    
    return (
        
        <div>
             <div>
                <h2>Explore the <span>Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>
             </div>

            <AvailableTechnology Technologies={Technologies}/>
        </div>
    );
};

export default Technologies;