import { Modal } from "./Modal";


interface postProps {
    id: string;
    image: string;
    image2?: string;
    name: string;
    price: string;
}

export function Post(props: postProps) {
    return(
       <div className="relative rounded-md overflow-hidden w-80">
        <div className="grid grid-cols-2 border-neutral-400">
            <img src={props.image} alt="" />
            <img src={props.image2} alt="" />
        </div>
        <div className="flex flex-row justify-between">
            <div>
                <p className="font-semibold text-black ml-2 mt-1 w-40">
                    {props.name}
                </p>
                <p className="font-normal text-black opacity-75 ml-2">
                    {props.price}
                </p>
            </div>                       
        </div>
       </div>
    )
}
