interface BasicProps {
    title?:string
    subtitle?:string
    text?:string
}

export default function Test ({title,subtitle,text} : BasicProps) {
   return( <>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{text}</p>
    </>)
}