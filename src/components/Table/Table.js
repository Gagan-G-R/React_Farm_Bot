import './Table.css'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import TableRow from '../TableRow/TableRow'


const Table = () => {
    const { type } = useParams()
    const [snapshot, setSnapshot]=useState([])
    const history = useHistory()

    useEffect(()=>{
        db.collection(type).orderBy('time','asc').onSnapshot((snapshot)=>setSnapshot(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
        }))))
    }, [type])

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
            <p className= "heading" >Here are all the {type}</p>

            <div className="table__tableData">
                
                <table>
                    <tr style={{backgroundColor:'black',color:"white",fontWeight:'200',textAlign:'center'}}>
                        <th>#</th>
                        <th>Image</th>
                        <th>Grid No</th>
                        <th>Time</th>
                        <th>X-co (cm)</th>
                        <th>y-co (cm)</th>
                        <th>Option</th>
                    </tr>
                    {
                        snapshot.map((plant, index)=>(
                            <TableRow plant={plant} index={index} type={type}/>
                        ))
                    }
                </table>
            </div>

            <div className="table__buttonsContainer">
                <div className="table__addButton table__button class_border_add">
                    <Button
                        onClick={handleAddClick}
                        className="table__buttonText"
                    >
                        Add
                    </Button>
                </div>

                <div className="table__backButton table__button class_border_back ">
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
