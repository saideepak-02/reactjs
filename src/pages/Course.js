import React from "react";

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coursrName: "",
            instructor: "",
            fee: "",
            duartion: "4 months",
            courses: []
        }
    }

    onNameChange(e) {
        this.setState({ coursrName: e.target.value });
    }
    onInstructorChange(e) {
        this.setState({ instructor: e.target.value });
    }
    onFeeChange(e) {
        this.setState({ fee: e.target.value });
    }
    createCourse(e) {
        e.preventDefault();
        let course = {
            coursrName: this.state.coursrName,
            instructor: this.state.instructor,
            fee: this.state.fee,
            duartion: this.state.duartion
        }
        let tempCourse = this.state.courses;
        tempCourse.push(course);
        this.setState({ courses: tempCourse });
        this.resetCourse();
    }
    resetCourse(){
        this.setState({coursrName:"",fee:"",instructor:""})
    }

    deleteCourse(coursrName){
        let tempCourses=this.state.courses;
        let remainingCourses=tempCourses.filter((item)=>{
            return !item.coursrName.toLowerCase().includes(coursrName.toLowerCase())
        })
        this.setState({courses:remainingCourses});
    }

    render() {
        
        return (
            <div>
                <h1>Student Registration Form</h1>
                <div className="col-md-6">
                    <form onSubmit={(e) => this.createCourse(e)}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={(e) => this.onNameChange(e)} value={this.state.coursrName} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Instructor</label>
                            <input type="text" className="form-control" onChange={(e) => this.onInstructorChange(e)} value={this.state.instructor} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fee</label>
                            <input type="text" className="form-control" onChange={(e) => this.onFeeChange(e)} value={this.state.fee} />
                        </div>

                        <button type="submit" className="btn btn-success">Save</button>
                    </form>

                </div>
                <h1>course Info</h1>
                <div className="row">
                    {
                        this.state.courses.map((course) => {
                            return (
                                <div className="col-md-3 mb-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-text">{course.coursrName}</h4>
                                            <p className="card-text">{course.instructor}</p>
                                            <p className="card-text">{course.fee}</p>
                                            <p className="card-text">{course.duartion}</p>
                                        </div>
                                        <div className="card-footer">
                                        <span class="badge text-bg-danger" onClick={()=>this.deleteCourse(course.coursrName)} style={{cursor:"pointer"}}>Delete</span>
                                        <span class="badge text-bg-primary"  style={{cursor:"pointer"}}>Edit</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )

    }
}

export default Course;