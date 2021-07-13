import './Table.css'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Table = () => {
    const { type } = useParams()

    const history = useHistory()

    const handleBackClick = (e) => {
        e.preventDefault()
        history.push('/')
    }

    const handleAddClick = (e) => {
        e.preventDefault()
        history.push('/item/add')
    }

    return (
        <div className="table">
            <p>Here are all the {type}</p>

            <div className="table__tableData">
                <div className="table__header">
                    <p>#</p>
                    <p>time</p>
                    <p>x</p>
                    <p>y</p>
                    <p>option</p>
                </div>
                <table></table>
            </div>

            <div className="table__buttonsContainer">
                <div className="table__addButton table__button">
                    <Button
                        onClick={handleAddClick}
                        className="table__buttonText"
                    >
                        Add
                    </Button>
                </div>

                <div className="table__backButton table__button">
                    <Button
                        className="table__buttonText"
                        onClick={handleBackClick}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Table
