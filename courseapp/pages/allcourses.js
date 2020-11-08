import Link from 'next/link';
import React from 'react';


class AllCourses extends React.Component{
	constructor(){
		super();
		this.state={
			title: '',
			price: 0
		}
	}

	updateTitle= async e=>{
		await this.setState({title: e.target.value})
	}

	updatePrice= async e=>{
		await this.setState({price: e.target.value})
	}

	AddCourse=async ()=>{
		await fetch("http://localhost:8000/course/createcourse",{
	    method: 'post',
	    headers:({'Content-Type':'application/json'}),
	    body: JSON.stringify({
	      title: this.state.title,
	      price: this.state.price
	    })
	  }).then(response=> response.json())
	await document.getElementById("home").click();


	}
	render(){
		return(
			<div>
   <nav>
           <div >
              <ul>
               <li ><Link id="listcourses" href="/"><a id="home">All course</a></Link></li>
               <li ><Link  href="/allcourses"><a>Add courses</a></Link></li>
               <li><Link href="/updatecourses"><a>update course</a></Link></li>                                      
              </ul>
           </div>
   </nav>
   <div>
   <h1>Create a new course</h1>
   <div id="ct">
   <label >Course Title</label>
   <input type="text" id="coursename" name="coursename" onChange={this.updateTitle}></input>
   </div>
   <div id="cp">
   <label >Course price</label>
   <input type="number" id="courseprice" name="courseprice" defaultValue="0" onChange={this.updatePrice}></input>
   </div>
   
   <div>
   <button onClick={this.AddCourse}>Add Course</button>
  </div>
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
#cp{
  margin:10px;
}
#ct{
  margin:10px;
}

`}</style>
  </div>
			);
	}
}



export default AllCourses;
