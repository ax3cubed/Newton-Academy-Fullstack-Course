import { Episode } from "../interfaces/Episode";


const Card: React.FC<Episode> = ({description, title}) =>{
    return (
        <div className="mx-w-xs mx-auto bg-white rounded-lg shadow-lg p-5 sm:max-w-sm md:maw-w-md lg:max-w-lg h-64 flex flex-col">
            <h2 className="mb-2 font-bold text-xl">{title}</h2>
            <p className="mb-4 text-gray-700 flex-grow">
                {description}
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 mt-auto">Listen Now</a>
        </div>
    );
} 

export default Card;