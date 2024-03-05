const style = { 
  fontSize: '2.5em', 
  color: 'green', 
  fontWeight: 'bold', 
  lineHeight: '2.5rem'
}

const slides = [
    {
      slide: (
        <div className='flex flex-col text-left'>
          <a href="/#"><p className="text-gray-400 mb-20">skip {'>'} </p></a>
          <span>No hustle to find<br/> updated info on campus 1<br/></span>
          <span style={style}>
            Get all the <br/> info you need <br/> in one place
            </span>
        </div>
      ),
    },
    {
      slide: (
        <div className="flex flex-col text-right">
          <a href="/#"><p className="text-gray-400 mb-20">skip {'>'} </p></a>
          <span>No hustle to find <br/> updated info on campus 2<br/></span>
          <span style={style}>Get all the <br/>info you need <br/>in one place yu</span>
        </div>
      ),
    },
    {
      slide: (
        <div className="flex flex-col text-left">
          <span>No hustle to find <br/> updated info on campus 3<br/></span>
          <span style={style}>Get all the <br/>info you need <br/> in one place dtt</span>
        </div>
      ),
    },
  ];

export default slides;