import { Episode } from "../interfaces/Episode";

const Card: React.FC<Episode> = ({title, description}) =>{

    return (
       <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg p-5 sm:max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href="#" className="text-blue-500 hover:text-blue-700">Listen Now</a>
       </div>
    );
}

export default Card;