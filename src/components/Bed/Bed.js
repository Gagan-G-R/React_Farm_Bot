import './Bed.css'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
// import TableRow from '../TableRow/TableRow'


const Bed = () => {
    const { type } = useParams()
    const [snapshot_01, setSnapshot_01]=useState([])
    const [snapshot_02, setSnapshot_02]=useState([])
    const history = useHistory()

    useEffect(()=>{
        db.collection('farmbed_01').onSnapshot((snapshot_01)=>setSnapshot_01(snapshot_01.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
        }))))
    }, [type])

    useEffect(()=>{
        db.collection('farmbed_02').onSnapshot((snapshot_02)=>setSnapshot_02(snapshot_02.docs.map((doc)=>({
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
                    <div className="notinvert">
                        {
                            snapshot_01.map((plant, index)=>(
                                <img src={plant.data.link} width="200" height="200" alt="" ></img>
                            ))
                        }
                    </div>
                    <div className="invert">
                    {
                        snapshot_02.map((plant, index)=>(
                            <img src={plant.data.link} width="200" height="200" alt="" ></img>
                        ))
                    }
                    </div>
                    
            </div>

            {/* <div className="table__tableData">  
                    {
                        snapshot_02.map((plant, index)=>(
                            <img src={plant.data.link} width="200" height="200" alt="" ></img>
                        ))
                    }
            </div> */}


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