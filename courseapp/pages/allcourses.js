import Link from 'next/link';

async function AddCourse(){
	document.getElementById("loader").style.display = "block";
  await fetch("http://localhost:8000/course/createcourse",{
    method: 'post',
    headers:({'Content-Type':'application/json'}),
    body: JSON.stringify({
      title: document.getElementById("coursename").value,
      price: document.getElementById("courseprice").value
    })
  }).then(response=> response.json())

  window.location.pathname = '/'
}
export default () => (
  <div>
   <nav>
           <div >
              <ul>
               <li ><Link id="listcourses" href="/"><a>All course</a></Link></li>
               <li ><Link  href="/allcourses"><a>Add courses</a></Link></li>
               <li><Link href="/updatecourses"><a>update course</a></Link></li>                                      
              </ul>
           </div>
   </nav>
   <div>
   <h1>Create a new course</h1>
   <div id="ct">
   <label >Course Title</label>
   <input type="text" id="coursename" name="coursename"></input>
   </div>
   <div id="cp">
   <label >Course price</label>
   <input type="number" id="courseprice" name="courseprice"></input>
   </div>
   <div id="loader">
   Loading....
   </div>
   <div>
   <button onClick={AddCourse}>Add Course</button>
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
#loader{
	display:none;
}
`}</style>
  </div>
);



