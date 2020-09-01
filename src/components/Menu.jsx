import React from 'react'

import 'styles/Menu.css'
import Button from './Button'
import MenuDivider from './MenuDivider';
import InputForm from './InputForm';
import Input from './Input';

const Menu = () => {
  return (
    <div className='Menu'>
      <Button>Create room</Button>
      <MenuDivider/>
      <InputForm type='short' buttonText='Join'></InputForm>
      <Input type='short' buttonText='Join'></Input>
      <Button>Join</Button>
      <MenuDivider/>
      <Button>Exit</Button>
    </div>
  )
};

export default Menu;