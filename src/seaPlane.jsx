export default function SeaPlane({children}){
    return <div className="grow">
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 590 373" fill="none">
            <rect width="342.038" height="342.038" transform="matrix(0.862278 -0.506436 0.862278 0.506436 0 199.779)" fill="#1960AD"/>
            <path d="M0 199.779V173.441L22.4051 186.61L0 199.779Z" fill="#0E4F95"/>
            <path d="M590 173.442V199.779L567.595 186.611L590 173.442Z" fill="#0E4F95"/>
            <rect width="342.038" height="342.038" transform="matrix(0.862278 -0.506436 0.862278 0.506436 0 173.441)" fill="#4FC3F6"/>
        </svg>
    </div>
}