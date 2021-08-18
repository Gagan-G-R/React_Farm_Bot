import { Button } from '@material-ui/core'
import { db } from '../../firebase'

const TableRow = ({plant,index,type}) => {
    const handleDelClick = (e) => {
        e.preventDefault()
        db.collection(type).doc(plant.id).delete()
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td><img src={plant.data.url} width="200" height="200" alt=""></img></td>
            <td>{plant.data.gno}</td>
            <td>{plant.data.time}</td>
            <td>{plant.data.x}</td>
            <td>{plant.data.y}</td>
            <td>

                <div class="class_border_del"><Button className="del_but" onClick={handleDelClick}>Delete</Button></div>
                <div class="class_border_wat"><Button className="del_but" >Water</Button></div>
                <div class="class_border_mst"><Button className="del_but" >Moisture</Button></div>
                <div class="class_border_wed"><Button className="del_but" >Weed</Button></div>

            </td>
        </tr>
    )
}

export default TableRow
