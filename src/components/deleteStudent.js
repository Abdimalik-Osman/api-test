import {useParams,useNavigate} from 'react-router-dom';
import {useEffect,useState} from 'react'
function DeleteStudent(props){
    
    let {id} = useParams();
    let navigate = useNavigate();
    const [std,setStd] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3009/students/${id}`)
        .then(response => response.json())
        .then(result =>{
            console.log(result);
            setStd(result);
        })
        .catch(err => console.log("error ",err.message))
    },[])
    const deleteStd=(id) =>{
        fetch("http://localhost:3008/students/"+id, 
         { method: "DELETE"})
         .then(response => console.log(response))
        navigate('/')
        console.log("deleted successfully");
      }
    // fetch("")
    return (
        <div>
            <h1>delete</h1>
            {std && <div>{`name: `+std.sName}------ {`phone: `+std.phone}----- {`Class: `+std.sClass}------ {`semester: `+std.semester}</div>}
            <button className="btn btn-danger" onClick={()=>deleteStd(id)}>Delete</button>
        </div>
    )
}
export default DeleteStudent;