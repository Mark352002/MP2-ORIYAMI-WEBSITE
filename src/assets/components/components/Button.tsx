import { ComponentPropsWithoutRef,type FC } from 'react'
import './Button.css'
// declare types
type ButtonProps = {
    element: 'button'
} & ComponentPropsWithoutRef<'button'>;

type A_Tag = {
    element: 'anchor'
} & ComponentPropsWithoutRef<'a'>

const Button:FC<ButtonProps | A_Tag> = (btnprops) => {
  if (btnprops.element === 'anchor') {
    return <a className='btn btn-secondary btn-blue' {...btnprops}></a>
  }  
  //default button  / otherwise 
  return (
    <button className='btn btn-secondary btn-blue' {...btnprops}></button>
  )
}

export default Button

// <button className=" btn btn-blue nav-btn shadow"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//                 ACCOUNT
//             </button>