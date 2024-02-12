import Home from './Home'
import Xp from './Xp'
import Projets from './Projets'
import Education from './Education'

const PagePrincipal = () => {
    return (
        <div>
            {/* PAGES */}
            <div className="flex justify-center items-center">
                <div className="py-32 flex flex-col gap-28 pcScreen:w-9/12 md:w-1/2 sm:w-full">
                    <Home />
                    <Xp />
                    <Projets />
                    <Education />
                </div>
            </div>
        </div>
    )
}

export default PagePrincipal;
