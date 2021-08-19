import { Button } from '@material-ui/core'
import { db } from '../../firebase'
import firebase from 'firebase'

const TableRow = ({plant,index,type}) => {

    
    const handleDelClick = (e) => {
        e.preventDefault()
        db.collection(type).doc(plant.id).delete()
    }


    const handleWatClick = (e) => {
        e.preventDefault()
        var docRef = db.collection("Status").doc("Detect");
        docRef.get().then((doc) => {
            if (doc.exists) {
                if(!doc.data().state){

                    var str1,str2="WT05X00Y00Z00Q00";
                    db.collection(type).doc(plant.id).get().then((doc)=>{
                        console.log(doc.data())
                        var x = String(doc.data().x);
                        var y = String(doc.data().y);
                        if (x.length===1){
                            x="0"+x;
                        };
                        if (y.lenght===1){
                            y="0"+y;
                        };
                        str1="MV00X"+x+"Y"+y+"Z00Q00";
                        console.log(str1);


                        // var time = firebase.firestore.FieldValue.serverTimestamp();
                        // db.collection("cmds").doc(time).add({"cmd":String(str1)});
                        // time = firebase.firestore.FieldValue.serverTimestamp();
                        // db.collection("cmds").doc(time).add({"cmd":String(str2)});
                        db.collection("cmds").add({
                            "cmd1":String(str1),
                            "cmd2":String(str2),
                            "time":firebase.firestore.FieldValue.serverTimestamp()
                        });
                        


                    });
                }
            } 
            else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }



    const handleMstClick = (e) => {
        e.preventDefault()
        
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
                <div class="class_border_wat"><Button className="del_but" onClick={handleWatClick}>Water</Button></div>
                <div class="class_border_mst"><Button className="del_but" onClick={handleMstClick}>Moisture</Button></div>
                <div class="class_border_wed"><Button className="del_but" >Weed</Button></div>

            </td>
        </tr>
    )
}

export default TableRow
