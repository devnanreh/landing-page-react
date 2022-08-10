import React from 'react'

const Card = () => {
    return (
        <div class="card h-100">
          <img src="https://picsum.photos/500/325" class="card-img-top" alt="imagen"/>
    
          <div class="card-body text-center">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
    )
}

export default Card;