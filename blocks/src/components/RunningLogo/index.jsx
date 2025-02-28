import Logo from './logo'
import "./style.scss";
const attributes = {

}

const MarqueLogo = (props) => {


    const logoRepeat = () => [1, 1, 1].map(() => {
        return <Logo />
    })
    const logos = () => [1, 2].map(() => {
        return <div class="logo">
            {logoRepeat()}
        </div>
    })



    return (
        <>
            <section>
                <div className="marque">
                    <div className="marque__inner">
                        {logos()}
                    </div>
                </div>
            </section>
        </>
    )
}


export default MarqueLogo
export {
    attributes
}