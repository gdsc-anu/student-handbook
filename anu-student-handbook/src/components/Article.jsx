import PropTypes from "prop-types";

export default function Article({ selectedEntry}) {

    return (
        <div className="w-3/4 relative flex flex-col justify-between p-5">
            <div className="absolute inset-0" 
                style={{
                    backgroundImage: 'url(https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/95c55ad69a3d6d4296e5e535bf741cf1e56c1916)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: '.1',
                    zIndex: '-1',
                }}>
            </div>
            <div>
                {(!selectedEntry) ?
                    <p>Select an entry to view its content.</p> :
                    <>
                        <h3 className="font-bold text-center text-sm md:text-base underline">{selectedEntry.title}.</h3>
                        <p className="text-justify text-sm md:text-base">{selectedEntry.content}</p>
                    </>
                   
                }
                
            </div>
          
        </div>
    )
}


Article.propTypes = {
    selectedEntry: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
};