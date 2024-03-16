import PropTypes from 'prop-types';

export default function Header({firstToggle, secondToggle, fToggle, sToggle}) {
    return (
        <header className="bg-gray-100 w-1/4 h-screen">
            <img 
                src="https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/d1acd497fdc6d2dea2556a2609ef6f4d4838dc8d" 
                alt="school-logo"
                className='w-52 px-6 py-10'
            />

            <div>
                <p>Brief History <span onClick={firstToggle}>{ fToggle ? '⏬' : '>' }</span></p>
                {fToggle && 
                    <ul>
                        <li>Hey</li>
                        <li>Hello</li>
                        <li>Hi</li>
                    </ul>
                }
                <p>Adminstration and Registration <span onClick={secondToggle}>{ sToggle ?  '⏬' : '>'}</span></p>
                {sToggle && 
                    <ul>
                        <li>Hey</li>
                        <li>Hello</li>
                        <li>Hi</li>
                    </ul>
                }
            </div>
        </header>
    )
}

Header.propTypes = {
    firstToggle: PropTypes.func,
    secondToggle: PropTypes.func,
    fToggle: PropTypes.bool,
    sToggle: PropTypes.bool
}