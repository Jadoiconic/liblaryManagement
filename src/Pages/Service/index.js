import React from 'react'
import FooterSection from '../../Layout/Footer/FooterSection'
import NavBAr from '../../Layout/header/header'

const Service = () => {
    React.useEffect(() => {
        fetch('http://localhost')
            .then(res => console.log(res))
    }, [])
    return (
        <>
            <NavBAr />
            <div className='my-10 text-center'>
                <h2 className=' text-5xl font-bold'>Services</h2>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsam recusandae nemo itaque quis nostrum voluptatem corporis vitae. Officia doloremque, perferendis facere mollitia quod sit cupiditate rem beatae quae. Deserunt praesentium aspernatur exercitationem molestias facilis, voluptate dolorum? Sit, ipsum sapiente!
                </div>
            </div>
            <FooterSection />
        </>
    )
}

export default Service