import { Button } from 'bootstrap'
import React from 'react'


export default function Header() {
  return (
    <nav>
<div className='d-flex w-100 bg-light justify-content-end align-items-center border border-secondary' style={{height:'5em'}}>
<div className='p-5'>
<button className='btn btn-outline-primary' type="button" > Add Post</button>
</div>

<div className='ml-2 p-2 align-items-center ' style={{marginRight:'2em'}}>
 <button className='btn btn-light'>Profile</button>
</div>
</div>
    </nav>
  )
}
