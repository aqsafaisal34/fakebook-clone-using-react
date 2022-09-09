import React from 'react';
import ReactDOM from 'react-dom';
import profileImg from './images/profile.jpg';
import post1Img from './images/post1.jpg';
import post2Img from './images/post2.jpg';
import post3Img from './images/post3.jpg';
import dvagoImg from './images/dvago.png';
import './style.css';

function Header({name}) {
  return <div>
  <h2 class="heading"> {name} </h2>
  </div>
}
function Form({profileImg,input}) {
  return <div className="formbox">
   <img className="profile" src={profileImg} alt=""/>
  
    <input className="textarea" type="textarea" placeholder="What's on your mind" />
  
  </div>
}

function Hi({profileImg, name,date,text, postImg,like,comment,share}) {
  return <div className="content">
    <div className="body">
    <div className="head">
    <img className="profile" src={profileImg} alt=""/> 
    <span className="pname"><p className="name">{name} </p>  {date} </span>
    </div>
    <p className='text'>{text} </p>
    <img className='post1' src={postImg} alt="" />
    <p className="reaction"> {like} {comment}  {share} </p>
    <p className='buttons'>
      <button >Like</button> <button>Comment</button> <button>Share </button> 
    </p>
      
    
    </div>
  </div>;
}

ReactDOM.render(
<>
<Header name="facebook"/>
<Form profileImg={profileImg}/>
<Hi
  profileImg={dvagoImg}
  name="Dvago"
  date={"sponsered"}
  text="All the healthcare you need, delivered to you only in 60 minutes! 
  Download the App now"
  postImg={post3Img}
  like = {"1k likes"}
  comment = {"150 comments"}
  share = {"200 shares"}
/><Hi
  profileImg={profileImg}
  name="Aqsa Faisal"
  date={"yesterday at 11:00a.m"}
  text="Give yourself sometime and think about it!"
  postImg={post1Img}
  like = {"41 likes"}
  comment = {"3 comments"}
  share = {"2 shares"}
/>
<Hi
  profileImg={profileImg}
  name="Aqsa Faisal"
  date={"2 days ago"}
  text="InshaAllah"
  postImg={post2Img}
  like = {"10 likes"}
  comment = {"2 comments"}
  share = {"1 share"}
/>
</>

, document.querySelector('#root'));