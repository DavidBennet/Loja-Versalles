

interface linsProps {
    adress: string;
    icon: string;
    description: string;
}

export function Links(props: linsProps) {
    return(
        <div className="w-16 h-16 bg-neutral-500 ml-5">
            <a target="_blank" href={props.adress}>
                <img src={props.icon} alt={props.description} />
            </a>
        </div>
    )
}