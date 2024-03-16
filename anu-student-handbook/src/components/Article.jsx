const bgImg = {
    backgroundImage: 'url(https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/95c55ad69a3d6d4296e5e535bf741cf1e56c1916)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backdropFilter: 'blur(5px)',
}

export default function Article() {
    return (
        <div className="h-full" style={bgImg}>
            <h1>Article</h1>
        </div>
    )
}