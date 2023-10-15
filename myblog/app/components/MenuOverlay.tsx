import React from 'react'
import NavLinks from './NavLinks'
import { link } from 'fs'

export const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>{links.map((link, index) => (
    <li key={index}><NavLinks href={link.path} title={link.title}/></li>
    ))}
    </ul>
  )
}
