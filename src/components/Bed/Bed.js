import './Bed.css'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
// import TableRow from '../TableRow/TableRow'


const Bed = () => {
    const { type } = useParams()
    const [snapshot, setSnapshot]=useState([])
    const history = useHistory()

    useEffect(()=>{
        db.collection('farmbed').onSnapshot((snapshot)=>setSnapshot(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
        }))))
    }, [type])

    const handleBackClick = (e) => {
        e.preventDefault()
        history.push('/')
    }
    const handleDetectClick = (e) => {
        e.preventDefault()
        var docRef = db.collection("Status").doc("Detect");
        docRef.update({state: true});
    }
    return (
        <div className="table">
            <p class="heading">Here is the farm bed</p>

            <div className="table__tableData">
                    {
                        snapshot.map((plant, index)=>(
                            <img src={plant.data.link} width="200" height="200" alt="" ></img>
                        ))
                    }
            </div>

            <div className="table__buttonsContainer">

                <div className="table__backButton table__button class_border_add ">
                    <Button 
                        className="table__buttonText"
                        onClick={handleBackClick}
                    >
                        Back
                    </Button>
                    
                </div>
                <div className="table__backButton table__button class_border_back ">
                    <Button 
                        className="table__buttonText"
                        onClick={handleDetectClick}
                    >
                        Restart
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default Bed