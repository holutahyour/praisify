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
}

export default function AppModal({ children, element, title, isOpen = false }: IAppModalProps) {  
  return (
    <div>
      <Link
        href={`?${new URLSearchParams({ create_modal: "true" })}`}
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
                    href={`?`}
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
                    href={`?`}
                  >
                    <Button isGhost={true}>Cancel</Button>
                  </Link>
                  <Button>Create</Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}