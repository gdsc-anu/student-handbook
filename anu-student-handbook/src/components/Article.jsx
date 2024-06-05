// import axios from "axios";
// import { useState, useEffect} from "react";
import PropTypes from "prop-types";

export default function Article({ selectedEntry, onBack, onNext, disableBack, disableNext}) {

    return (
        <div className="h-full relative flex flex-col justify-between p-5">
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
                        <h3 className="font-bold text-center text-lg underline">{selectedEntry.title}.</h3>
                        <p className="text-justify">{selectedEntry.content}</p>
                    </>
                   
                }
                
            </div>
            <div>
                <div className="flex justify-around">
                    <button 
                        className="bg-gray-300 py-1 px-6 rounded-2xl" 
                        onClick={onBack}
                        disabled={disableBack}
                    >
                        Back
                    </button>

                    <button 
                        className="bg-gray-300 py-1 px-6 rounded-2xl"
                        onClick={onNext}
                        disabled={disableNext}
                    >
                        Next
                    </button>
                </div>
                <div className="flex justify-center">
                    <p className="bg-gray-200 py-1 px-4 rounded-2xl my-4">Made by GDSC-ANU 23/24</p>
                </div>
            </div>
        </div>
    )
}


Article.propTypes = {
    selectedEntry: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    disableBack: PropTypes.bool.isRequired,
    disableNext: PropTypes.bool.isRequired,
};