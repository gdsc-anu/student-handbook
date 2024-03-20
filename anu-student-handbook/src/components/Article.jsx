export default function Article() {
    return (
        <div className="h-full relative flex flex-col justify-between">
            <div className="absolute inset-0" style={{
                backgroundImage: 'url(https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/95c55ad69a3d6d4296e5e535bf741cf1e56c1916)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: '.1',
                zIndex: '-1',
            }}></div>
            <div>
                <h1>Article</h1>
            </div>
            <div>
                <div className="flex justify-around">
                    <button className="bg-gray-300 py-1 px-6 rounded-2xl">Back</button>
                    <button className="bg-gray-300 py-1 px-6 rounded-2xl">Next</button>
                </div>
                <div className="flex justify-center">
                    <p className="bg-gray-200 py-1 px-4 rounded-2xl my-4">Made by GDSC-ANU 23/24</p>
                </div>
            </div>
        </div>
    )
}
