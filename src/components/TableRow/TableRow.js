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
            <td>{new Date(plant.data.time.toDate()).toUTCString()}</td>
            <td>{plant.data.x}</td>
            <td>{plant.data.y}</td>
            <td><div class="class_border"><Button className="del_but" onClick={handleDelClick}>delete</Button></div></td>
        </tr>
    )
}

export default TableRow
