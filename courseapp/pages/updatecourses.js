
import Link from 'next/link';
import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateCourses extends React.Component{
		
	constructor()
	{
		super();
		this.state={
			courseslist:[],
			currid:'',
			currtitle:'',
			currprice:0
		}
	}
	getCourses=()=>{
	 fetch("http://localhost:8000/course/getcourses").then(response=> response.json()).then(data=>{
		this.setState({courseslist: data})
		
	})
	 

	}
	updateCourse= async () =>{
		var urlstring = "http://localhost:8000/course/updatecourse/"+this.state.currid;
		 await fetch(urlstring,{
			method: 'put',
			headers: ({'Content-Type':'application/json'}),
			body: JSON.stringify({
				id: this.state.currid,
				title: this.state.currtitle,
				price: this.state.currprice
			})
		}).then(response=> response.json());
			
			
		await document.getElementById("home").click();
	}
	deleteCourse=async (e)=>
	{
		
		var urlstring2 = "http://localhost:8000/course/deletecourse/"+e.target.parentNode.parentNode.parentNode.id;
		
		 await fetch(urlstring2,{
			method: 'delete'			
		})
		 await this.getCourses();
	}
	updateTitle=async e => {
	 	await this.setState({currtitle: e.target.value, currid:e.target.parentNode.id,currprice: e.target.parentNode.getElementsByTagName("input")[1].value})
	 	
	 	
	 }
	 updatePrice=async e => {
	 	await this.setState({currprice: e.target.value, currid:e.target.parentNode.parentNode.id,currtitle:e.target.parentNode.parentNode.getElementsByTagName("input")[0].value})
	 	
	 	 
	 }
	componentDidMount(){
		
		
		 this.getCourses();
	}
	render()
	{
		
		return(
    <div>
   <nav>
           <div >
              <ul id="navbarlinks">
               <li><Link href="/" ><a id="home">All course</a></Link></li>
               <li><Link href="/allcourses"><a>Add courses</a></Link></li>
               <li id="updatelink"><Link href='/updatecourses'><a>update course</a></Link></li>                                      
              </ul>
           </div>
   </nav>
   <div>
   <ul id="tasklist" className="list-group">
   {
     this.state.courseslist.map((course)=>(
       <li id={course.id} key={course.id}><label>title: </label>
       <input type="text" defaultValue={course.title} onChange={this.updateTitle} ></input>
       <span><button onClick={this.updateCourse}>Update</button></span>
      
       <div><label>price: </label>
       <input type="number" defaultValue={course.price} onChange={this.updatePrice}></input>
        <span><button onClick={this.deleteCourse}>Delete</button></span>
       </div>
      
       </li>

       ))
   }
   </ul>  
   </div>
<style jsx>{`
  nav {
      
       width: 100%;
      height: 100px;
      position: relative;
      width: 100%;
      left:0px;
      background-color: black;
      color:white;
}

nav ul {
      line-height: 60px;
      list-style: none;
      background: rgba(0, 0, 0, 0);
      
      color: white;
      padding: 0;
      text-align: right;
      right: 20px;
      margin: 0;
      padding-right: 10px !important;
      transition: 1s;
}



nav ul li {
      display: inline-block;
      padding: 16px 16px;
}

nav ul li a {
      text-decoration: none;
      color: white;
      font-size: 16px;
}
nav ul li a:active{
      text-decoration: none;
      color: green;
      font-size: 16px;
}
#tasklist{
  list-style-type:none;  
  font-size:20px;
  
}
#tasklist li{
  margin:10px;
  border-radius:5px;
  background-color:rgb(211, 219, 213);
  width:50%;
}
button{
position: absolute;
right:50%;
}


`}</style>
  </div>
    );
	
}
}

export default UpdateCourses;
