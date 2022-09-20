import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
function NewStudents(){
  const [sName,setName] = useState();
  const [phone,setPhone] = useState();
  const [sClass,setClass] = useState();
  const [semester,setSemester] = useState();
  
  
    let navigate = useNavigate();
    
    // add new student
    function AddStudent(event) {
       event.preventDefault();
       createList();
       alert("inserted successfully");
        navigate("/")
        
      }

    //   create student
     const createList=() =>{
        fetch("http://localhost:3009/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({sName,phone,sClass,semester})
        })
        console.log("inserted");
      }
      
    return(
        <div className="container">
        
            <form className="form p-4 shadow-lg bg-white my-3" style={{width:"500px", margin:"auto"}}>
                <div className="form-group">
                    <label className="" htmlFor="sName">Name</label>
                    <input type="text" name="sName" id="sName"
                    value={sName} 
                    onChange={(e)=> setName(e.target.value)}
                     className="form-control" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label className="" htmlFor="sPhone">Phone</label>
                    <input type="number" name="sPhone" id="sPhone"
                    value={phone} 
                    onChange={(e)=> setPhone(e.target.value)}
                     className="form-control" placeholder="Enter your phone" />
                </div>
                <div className="form-group">
                    <label className="" htmlFor="sClass">Class</label>
                    <input type="text" name="sClass" id="sClass" 
                    value={sClass} 
                    onChange={(e)=> setClass(e.target.value)}
                    className="form-control" placeholder="Enter your Class" />
                </div>
                <div className="form-group">
                    <label className="" htmlFor="semester">Semester</label>
                    <input type="text" name="semester" id="semester" 
                    value={semester} 
                    onChange={(e)=> setSemester(e.target.value)}
                    className="form-control" placeholder="Enter your semester" />
                </div>
                <div>
                <button
                onClick={AddStudent}
                 className="btn btn-primary m-2">Add</button>
                </div>
            </form>
        </div>
    )
}
export default NewStudents;