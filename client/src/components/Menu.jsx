import React from 'react'

const Menu = () => {
    const posts = [
        {
          id:1,
          title:"my trip",
          desc:"when fishing",
          img:"https://images.unsplash.com/photo-1572123866325-6f15f82c993d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
        },
        {
          id:2,
          title:"my day",
          desc:"when day",
          img:"https://images.unsplash.com/photo-1588746853740-bd35aad10bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
          id:3,
          title:"bagel",
          desc:"when eating",
          img:"https://images.unsplash.com/photo-1627308595260-6fad84c40413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
          id:4,
          title:"duck",
          desc:"animal",
          img:"https://images.unsplash.com/photo-1632877943287-64636ca57b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
          id:5,
          title:"plant",
          desc:"when gardening",
          img:"https://plus.unsplash.com/premium_photo-1661757545105-63edc4987957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        },
        
    ]
    return (
        <div className="menu">
            <h1>Other Posts</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read more</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
