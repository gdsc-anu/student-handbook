import PropTypes from "prop-types";
import Footer from "./Footer"
import Nav from "./Nav";

export default function Article({ currentContent, toggleHandler, setToggleHandler, nextNavigation, previousNavigation, handlePagination, data }) {

    return (
        <div className={ `${toggleHandler ? "" : "ml-80"} w-full`}>
            <Nav
                toggleHandler = {toggleHandler}
                setToggleHandler = {setToggleHandler} 
            />
            <div className="absolute inset-0 flex-grow" 
                style={{
                    backgroundImage: 'url(https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/95c55ad69a3d6d4296e5e535bf741cf1e56c1916)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: '.1',
                    zIndex: '-1',
                }}> 
            </div>
            <div className="flex-1 p-8 overflow-y-auto">
        {currentContent ? (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{currentContent.title}</h1>
            <div className="prose prose-lg">
              {currentContent.content.split('\r\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
            {currentContent.image && (
              <img 
                src={currentContent.image} 
                alt={currentContent.title}
                className="mt-4 rounded-lg shadow-md"
              />
            )}
          </div>
        ) : (
          <div className="text-center text-gray-500">Select an entry to view content</div>
        )}
      </div>
            {/* <div className={`max-w-3xl mx-auto`}>
                <h1 className="text-l font-bold mb-6">{currentContent?.title}</h1>
                <p className="">
                    {currentContent.content}
                </p>
            </div> */}
            <Footer 
               nextNavigation={nextNavigation}   // Pass nextNavigation to Footer
               previousNavigation={previousNavigation}   // Pass previousNavigation to Footer
               handlePagination={handlePagination}   // Pass handlePagination to Footer
               data={data}
            />
        </div>
    )
}


Article.propTypes = {
    currentContent: PropTypes.object,
    toggleHandler: PropTypes.bool.isRequired,
    setToggleHandler: PropTypes.func.isRequired,
    nextNavigation: PropTypes.object,
    previousNavigation: PropTypes.object,
    handlePagination: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            sections: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    title: PropTypes.string.isRequired,
                    entries: PropTypes.arrayOf(
                        PropTypes.shape({
                            id: PropTypes.number.isRequired,
                            title: PropTypes.string.isRequired
                        })
                    ).isRequired
                })
            ).isRequired
        })
    ).isRequired
};