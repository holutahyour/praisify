import * as React from 'react';
import Modal from '@mui/material/Modal';
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from '../Button';
import Link from 'next/link';

type IAppModalProps = {
  children?: React.ReactNode
  element?: React.ReactNode,
  title: string,
  isOpen: boolean,
  buttonLink?: string,
  cancelLink?: string,
  handleSubmit?: () => void
}

export default function AppModal({ children, element, title, buttonLink, cancelLink, handleSubmit, isOpen = false }: IAppModalProps) {  
  return (
    <div>
      <Link
        href={buttonLink || ""}
      ><Button>{title}</Button></Link>

      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='absolute -translate-x-1/2 bg-white rounded-md w-[800px] h-[510px] left-1/2 flex flex-col overflow-hidden mt-10'>
          {children || (
            <>
              <div className='flex justify-between text-gray-700 p-7'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <div className='flex gap-3'>
                  <FaRegWindowMinimize className="cursor-pointer" size={20} />
                  <Link
                    href={cancelLink || ""}
                    ><IoMdClose className="cursor-pointer" size={25} /></Link>
                </div>
              </div>
              <div className='flex-1 overflow-y-auto'>
                {element}
              </div>
              <div className='flex justify-between p-5'>
                <h1 className='text-xl font-semibold'></h1>
                <div className='flex gap-2'>
                  <Link
                    href={cancelLink || ""}
                  >
                    <Button isGhost={true}>Cancel</Button>
                  </Link>
                  <Button onClick={handleSubmit}>Create</Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}