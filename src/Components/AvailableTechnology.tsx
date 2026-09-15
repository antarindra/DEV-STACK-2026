import type { ITechnology } from "./TechnologiesType";

interface IavailableProps{
    Technologies:ITechnology[];
}

const AvailableTechnology = ({ Technologies }: IavailableProps) => {
    return (
        <div>
           
            {Technologies.map((Technology) => (
                <div key={Technology.name}>
                    {Technology.name}
                </div>
            ))}
        </div>
    );
};
export default AvailableTechnology;