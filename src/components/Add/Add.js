import './Add.css'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { useHistory } from 'react-router-dom'

const Add = () => {
    const [state, setState] = useState('')
    const [xCoord, setXCoord] = useState('')
    const [yCoord, setYCoord] = useState('')

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/')
    }

    return (
        <div className="add">
            <div className="add__dropdown">
                <div className="add__input">
                    <input readOnly className="add__stateValue" value={state} />
                    <ArrowDropDownIcon />
                </div>
                <div className="add__dropdownContent">
                    <Button
                        onClick={() => {
                            setState('Crops')
                        }}
                    >
                        Crops
                    </Button>
                    <Button
                        onClick={() => {
                            setState('Weeds')
                        }}
                    >
                        Weeds
                    </Button>
                </div>
            </div>

            <div className="add__input">
                <input
                    className="add__stateValue"
                    placeholder="X-Coordinates"
                    type="number"
                    value={xCoord}
                    onChange={(e) => setXCoord(e.target.value)}
                />
            </div>

            <div className="add__input">
                <input
                    className="add__stateValue"
                    placeholder="Y-Coordinates"
                    type="number"
                    value={yCoord}
                    onChange={(e) => setYCoord(e.target.value)}
                />
            </div>

            <div className="add__button">
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default Add
