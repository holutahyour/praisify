import * as React from 'react';
import MUIDrawer from '@mui/material/Drawer';
import Button from '../Button';
import { IoMdClose } from 'react-icons/io';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type IDrawerProps = {
  children?: React.ReactNode
  element?: React.ReactNode,
  anchor?: Anchor,
  title: string
}

export default function Drawer({ children, element, anchor, title, }: IDrawerProps) {
  const [toggle, setToggle] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setToggle(!anchor)}>{title}</Button>
      <MUIDrawer
        anchor={anchor || "right"}
        open={toggle}
        onClose={() => setToggle(!anchor)}
      >
        <div className='relative mt-2'>
          <span className='absolute right-2' onClick={() => setToggle(false)}>
            <IoMdClose className="cursor-pointer" size={25} />
          </span>
        </div>
        <div className='w-96 p-8'>
          {children}
        </div>
      </MUIDrawer>
    </React.Fragment>
  );
}