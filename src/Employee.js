import React from "react";
var arr=[1,2,3];
console.log(arr[1]);
class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"ram",
            address:"hyd",
            email:"test@gmail.com"
        }
    }
    render(){
       
        return(
            <div>
            <table >
                <th>{this.state.name} {arr[1]}</th>
                <th>address</th>
                <th>email</th>
            </table>
            <input type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}


export default Employee;