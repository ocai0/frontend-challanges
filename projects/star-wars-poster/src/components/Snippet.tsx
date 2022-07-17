type ISnippet = {
    title: string,
    subtitle: string,
    className?: string
}
function Snippet({ title, subtitle, className }: ISnippet) {
    return (
        <div className={`${className}
                        relative sm:absolute sm:left-1/2 bottom-0 sm:translate-y-full sm:-translate-x-1/2
                        scale-0 mx-auto
                        uppercase leading-tight text-snippet whitespace-nowrap text-center 
                        flex items-center flex-col justify-center`}>
            <h2> { title } </h2>
            <h3> { subtitle } </h3>
        </div>
    );
}
export default Snippet;