import { use } from "react";
import AvailableTechnology from "./AvailableTechnology";
import type { ITechnology } from "./TechnologiesType";

interface TechnologyProps {
    technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologyProps) => {
    
    const technologies = use(technologiesPromise);

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
          
            <div className="mb-8">
                <h2 className="font-bold text-4xl lg:text-5xl">
                    Explore the <span className="text-pink-600">Technologies</span>
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

         
            <AvailableTechnology Technologies={technologies} />
        </section>
    );
};

export default Technologies;