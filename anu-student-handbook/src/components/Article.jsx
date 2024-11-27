import PropTypes from "prop-types";
import Footer from "./Footer"

export default function Article({ selectedEntry, entryList, currEntry, onBack, onNext }) {

    return (
        <div className="relative flex flex-col justify-between min-h-screen p-2">
            <div className="absolute inset-0 flex-grow" 
                style={{
                    backgroundImage: 'url(https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/95c55ad69a3d6d4296e5e535bf741cf1e56c1916)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: '.1',
                    zIndex: '-1',
                }}> 
            </div>
                {selectedEntry && entryList[selectedEntry] && (
                    <div className="">
                        <h3 className="font-bold text-center text-sm md:text-base underline">{entryList[selectedEntry][currEntry]?.title}:</h3>{" "}
                        <p className="text-justify text-sm md:text-base  px-4">{entryList[selectedEntry][currEntry]?.content}</p>
                    </div>
                )}
                <Footer 
                    onBack = {onBack}
                    onNext = {onNext}
                />
        </div>
    )
}


Article.propTypes = {
    selectedEntry: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
    entryList: PropTypes.object.isRequired,
    currEntry: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};