import { IPoster } from '../posters'
import Snippet from './Snippet'
function Poster({ data }: {data: IPoster}) {
    const posterStyle = { backgroundImage: `url(${data.url})` }
     
    return (
        <div className='poster group relative
                        cursor-pointer
                        flex flex-col gap-1'>
            <div style={posterStyle} className="bg-cover w-full h-full transition-all flex items-end mb-2"></div>
            <Snippet className='group-hover:scale-150' title={ data.title } subtitle={ data.subtitle } />
        </div>
    );
}
export default Poster;