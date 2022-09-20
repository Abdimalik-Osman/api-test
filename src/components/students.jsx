import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import DeleteStudent from './deleteStudent';
function Students(){
    const [students,setStudents] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3009/students")
        .then(response => response.json())
        .then(data => {
           let allStudents = data.map(student =>{
            return (
            <tr key={student.id}>
            <td>{student.sName}</td>
            <td>{student.sClass}</td>
            <td>{student.semester}</td>
            <td>{student.phone}</td>
            <td> <Link to={`/Update/${student.id}`} className="btn btn-success">Update</Link></td>
            <td> <Link
                to={`/delete/${student.id}`} className="btn btn-danger">Delete</Link></td>
            </tr>
            )
        })
        setStudents(allStudents);  
        
    }).catch(error => console.log(error))
           
    },[])
  

    return(
        
        <div className="container">
            <table className="table hover table-stripped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Semester</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {students}
                </tbody>
            </table>
        </div>
    )
}
export default Students;