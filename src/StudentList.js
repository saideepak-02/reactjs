import React from "react";
class StudentList extends React.Component {
    constructor() {
        super();

        this.state = {
            students: [
                {
                    id: 1,
                    rollno: 101,
                    name: "ttest1",
                    age: 21,
                    courses: ["mean", "react", "mongodb"]
                },
                {
                    id: 2,
                    rollno: 102,
                    name: "ttest2",
                    age: 20,
                    courses: ["ds", "react", "mongodb"]
                },
                {
                    id: 3,
                    rollno: 103,
                    name: "ttest3",
                    age: 19,
                    courses: ["mean", "node", "angular"]
                },
                {
                    id: 4,
                    rollno: 104,
                    name: "ttest4",
                    age: 20,
                    courses: ["mean", "java", "ds"]
                }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <h1>list of students</h1>
                {/* card */}
                <div className="row">
                    
                      {this.state.students.map((student)=>{
                       return(
                        <div className="col-md-3">
                       <div className="card" >
                        <img src="https://www.pngitem.com/pimgs/m/272-2720656_user-profile-dummy-hd-png-download.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Name: {student.name}</h5>
                                <p className="card-text">Rollno: {student.rollno}</p>
                                <p className="card-text">Age: {student.age}</p>
                                <p className="card-text">Id: {student.id}</p>
                                {
                                    student.courses.map((course)=>
                                    {
                                        return(
                                            <span class="badge text-bg-primary">{course} </span>
                                        )
                                    })
                                }
                                
                            </div>
                            </div>
                    </div>)
                      })}
                   

                </div>
               
            </div>
        )
    }
}

export default StudentList;