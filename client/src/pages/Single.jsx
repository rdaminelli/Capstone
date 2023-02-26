import React from 'react'
import pencil from "../img/pencil.png"
import trash from "../img/trash.png"
import { Link } from 'react-router-dom'
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761.jpg" alt="" />
        <div className="user">
          <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" alt="" />
          <div className="info">
            <span>Mike</span>
            <p>posted 2 centuries ago</p>  
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={pencil} alt="" />
            </Link>
            <img src={trash} alt="" />
          </div>
        </div>
        <h1>title</h1>
        <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single