export interface CardProps {
    title: string;
    description: string;
    likes: number;
}
const Card =({title, description, likes}: CardProps) => {
    return(
        <div className='bg-orange-300 p-4 shadow-md w-full'>
            <p className='font-bold'>{title}</p>
            <p className='text-gray-500 bg-blue-400'>{description}</p>
            <p className='font-semibold bg-purple-400'>{likes}</p>
        </div>
    );
}
export default Card;