import {useState,useEffect} from 'react';
import {Link, useParams,useNavigate} from 'react-router-dom';
function UpdateStudent(props){
    let {id} = useParams();
    let navigate = useNavigate();
    const [std,setStd] = useState({});
    const [sName,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [sClass,setClass] = useState("");
    const [semester,setSemester] = useState("");
    const data= {sName,phone,sClass,semester};
    useEffect(()=>{
        fetch(`http://localhost:3009/students/${id}`)
        .then(response => response.json())
        .then(result =>{
            console.log(result);
            setStd(result);
        })
        .catch(err => console.log("error ",err.message))
    },[])
    const updateStudent =(id) =>{
       
        fetch("http://localhost:3009/students/"+id, 
         { method: "PUT",
         headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
         .then(response => console.log(response))
        navigate('/')
        console.log("Updated successfully");
}
    
    function getID(data){
        let stdName = data.sName;
        let stdPhone = data.phone;;
        let stdClass = data.sClass;
        let stdSemester = data.semester;
        setName(stdName);
        setPhone(stdPhone);
        setSemester(stdSemester);
        setClass(stdClass);
    }
    return(
        <div className="container">
        <table className="table table-striped hv-table my-5">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Class</th>
                    <th>Semester</th>
                </tr>
            </thead>
            <tbody>
                <tr key={std.id}  onClick ={()=>getID(std)}>
                    <td>{std.sName}</td>
                    <td>{std.phone}</td>
                    <td>{std.sClass}</td>
                    <td>{std.semester}</td>
                </tr>
            </tbody>
        </table>
        <form className="form p-4 shadow-lg bg-white my-3" style={{width:"500px", margin:"auto"}}>
            <div className="form-group">
                <label htmlFor="sName">Name </label>
                <input type="text" name="sName"
                value={sName}
                onChange={(e)=> setName(e.target.value)}
                 id="sName" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                 className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="sClass">Class</label>
                <input type="text" name="sClass"
                value={sClass}
                onChange={(e)=> setClass(e.target.value)}
                 id="sClass" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="semester">Semester</label>
                <input type="text" name="semester" id="semester"
                value={semester}
                onChange={(e)=> setSemester(e.target.value)}
                 className="form-control" />
            </div>
            <button
            onClick={()=>updateStudent(id)}
             className="btn btn-primary my-3">Update</button>
        </form>
        </div>
    )
}
export default UpdateStudent;