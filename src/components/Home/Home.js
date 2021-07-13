import './Home.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()

    const handleCropsButtonClick = (e) => {
        e.preventDefault()
        history.push('/crops')
    }

    const handleWeedsButtonClick = (e) => {
        e.preventDefault()
        history.push('/weeds')
    }

    return (
        <div className="home">
            <p className="home__header">Farm Bot</p>
            <div className="home__buttonContainer">
                <div className="home__cropsButton">
                    <Button
                        className="home__button"
                        onClick={handleCropsButtonClick}
                    >
                        Crops
                    </Button>
                </div>

                <div className="home__weedsButton">
                    <Button
                        className="home__button"
                        onClick={handleWeedsButtonClick}
                    >
                        Weeds
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
