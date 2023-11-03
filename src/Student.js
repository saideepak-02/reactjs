import React from "react";
class Student extends React.Component{
    constructor(){
        super();
        this.state={
            name:"test1",
            age:22,
            rollno:33,
            courses:["MERN","MEAN","DS","PYTHON","DATABASE"]

        }

    }
    render(){
        return(
            <div>
                <h2>student information</h2>
                <h4>name:{this.state.name}</h4>
                <h4>age:{this.state.age}</h4>
                <h4>rollno:{this.state.rollno}</h4>
                <ul>
                    {
                        this.state.courses.map((course)=>{
                            return(
                                <li>{course}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Student;