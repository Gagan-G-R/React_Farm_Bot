import './Add.css'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { useHistory } from 'react-router-dom'
import {db} from '../../firebase'
import firebase from 'firebase'

const Add = () => {
    const [state, setState] = useState('crops')
    const [xCoord, setXCoord] = useState('')
    const [yCoord, setYCoord] = useState('')

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection(state).add({
            x:xCoord,
            y:yCoord,
            time:firebase.firestore.FieldValue.serverTimestamp()
        })
        history.push('/')
    }

    return (
        <div className="add">
            <div className="coo">
            <div className="add__dropdown">
                <div className="add__input">
                    <input readOnly className="add__stateValue" value={state} />
                    <ArrowDropDownIcon />
                </div>
                <div className="add__dropdownContent">
                    <Button
                        onClick={() => {
                            setState('crops')
                        }}
                    >
                        Crops
                    </Button>
                    <Button
                        onClick={() => {
                            setState('weeds')
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
            </div>
            <div className="add__button">
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>

    )
}

export default Add
