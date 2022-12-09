

interface linsProps {
    adress: string;
    icon: string;
    description: string;
}

export function Links(props: linsProps) {
    return(
        <div className="w-24 h-16 flex justify-center items-center xl:w-32 xl:h-16 lg:w-28 lg:h-12 sm:w-20">
            <a target="_blank" href={props.adress} className="">
                <img src={props.icon} alt={props.description}/>
            </a>
        </div>
    )
}