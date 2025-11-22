import '../components/pages/stylesheets/Button.css'

export default function Button ({
    type = "", 
    className = "", 
    id,
    onClick,
    disabled = false,
    children,
}){
    return (
        <button
            type= {type}
            className={className}
            id={id}
            onClick={onClick}
            disabled= {disabled}
        >
            {children}
        </button>
    )
}