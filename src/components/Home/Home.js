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

    const handleDetectButtonClick = (e) => {
        e.preventDefault()
        history.push('/farm/detect')
    }

    return (
        <div className="home">
            <p className="home__header">Farm Bot</p>
            
            

            <div className="home__buttonContainer">
                <div className="home__cropsButton"onClick={handleCropsButtonClick}>
                    <Button
                        className="home__button button"
                        
                    >
                        Crops
                    </Button>
                </div>

                <div className="home__weedsButton"onClick={handleWeedsButtonClick}>
                    <Button
                        className="home__button button"
                        
                    >
                        Weeds
                    </Button>
                </div>

                <div className="home__detectButton"onClick={handleDetectButtonClick}>
                    <Button
                        className="home__button"
                        
                    >
                        Detect
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Home
