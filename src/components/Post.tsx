import { Modal } from "./Modal";


interface postProps {
    id: string;
    image: string;
    image2?: string;
    name: string;
    price: string;
    urlStore: string;
}

export function Post(props: postProps) {
    return(
       <div className="relative rounded-md overflow-hidden mx--auto xl:w-80 xl:h-64 lg:w-72 md:w-64 sm:w-96">
        <div className="grid grid-cols-2 border-neutral-400">
            <img src={props.image} alt="" />
            <img src={props.image2} alt="" />
        </div>
        <div className="flex h-14 xl:w-80 lg:w-80 md:w-64 sm:w-96">
            <div className="mt-1 xl:w-40 lg:w-36 lg:-8 md:w-32 sm:w-48">
                <strong className="ml-2 xl:text-lg lg:text-base md:text-sm ">
                    {props.name}
                </strong>                
                <p className="font-normal xl:text-lg lg:text-base md:text-sm text-black ml-2">
                    {props.price}
                </p>
            </div>
            <div className="flex content-center items-center xl:w-40 lg:w-36 md:w-32 sm:w-48">
                <a href={props.urlStore} target="_blank" className="flex flex-col content-center items-center rounded-sm cursor-pointer xl:w-40 xl:text-xl lg:w-36 lg:h-8 md:w-32 lg:text-lg md:text-base sm:w-48 font-bold text-lg text-center text-red-500 my-auto hover:text-red-700 duration-200">
                    Compre Aqui
                </a>    
            </div>                       
        </div>
       </div>
    )
}
