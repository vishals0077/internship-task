
import Link from 'next/link';
var titledef = '';
var pricedef='';
async function UpdateCourse(event){
	document.getElementById("loader").style.display = "block";
var myid = event.target.parentNode.parentNode.id;
var newtitle = event.target.parentNode.parentNode.getElementsByTagName("input")[0].value;
var newprice = event.target.parentNode.parentNode.getElementsByTagName("input")[1].value;
var urlstring = "http://localhost:8000/course/updatecourse/"+myid;
await fetch(urlstring,{
	method: 'put',
	headers: ({'Content-Type':'application/json'}),
	body: JSON.stringify({
		title: newtitle,
		price: newprice
	})
}).then(response=> response.json())
window.location.pathname = '/'
}

async function DeleteCourse(event){
	document.getElementById("loader").style.display = "block";
var myid2 = event.target.parentNode.parentNode.parentNode.id;

var urlstring2 = "http://localhost:8000/course/deletecourse/"+myid2;
await fetch(urlstring2,{
	method: 'delete'
	
})
window.location.pathname = '/'

}
export default function AllCourses({courses}) {
  return (
    <div>
   <nav>
           <div >
              <ul id="navbarlinks">
               <li><Link href="/"><a>All course</a></Link></li>
               <li><Link href="/allcourses"><a>Add courses</a></Link></li>
               <li id="updatelink"><Link href='/updatecourses'><a id="updatenow">update course</a></Link></li>                                      
              </ul>
           </div>
   </nav>
   <div>
   <ul id="tasklist" className="list-group">
   {
     courses.map((course)=>(
       <li id={course.id} key={course.id}><label>title: </label>
       <input type="text" defaultValue={course.title}></input>
       <span><button onClick={UpdateCourse}>Update</button></span>
      
       <div><label>price: </label>
       <input type="number" defaultValue={course.price}></input>
        <span><button onClick={DeleteCourse}>Delete</button></span>
       </div>
       <div id="loader">
   Loading....
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
#loader{
	display:none;
}

`}</style>
  </div>
    );
}

export async function getStaticProps(){
  const res = await fetch('http://localhost:8000/course/getcourses');
  const courses = await res.json()
   return {
    props: {
      courses,
    },
  }
}