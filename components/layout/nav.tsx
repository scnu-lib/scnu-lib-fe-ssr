import 'tailwindcss/tailwind.css';
import cn from 'classnames';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/component.module.css';

type NavProps = {
  choseItem: {
    title: string,
    Url: string
  }[],
  bgColor?: string,
  className?: string
}

function Nav(props: NavProps){
  const router = useRouter();

  return (
    <div className={cn(
      'flex',
      'top-0',
      {
        ['fixed']: router.pathname === '/',
        ['sticky']: router.pathname != '/'
      }
    )}>
      <nav className={cn(
        'flex',
        'flex-row',
        'justify-items-start',
        'items-center',
        'w-full',
        'bg-gray-50',
        styles.navHt,
        {
          ['bg-opacity-0']: router.pathname === '/',
        }
      )}>
        <div className={cn(
          'flex',
          'flex-row',
          'items-center'
        )}>
          {props.choseItem.map(item => {
            return (
              <div className={cn(
                'text-black',
                'text-sm',
                'cursor-pointer',
                'hover:text-gray-200',
                'px-4',
                'py-2',
                'transition-colors'
              )} 
              onClick={()=>{router.push(item.Url)}}
              key={item.title}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div></div>
      </nav>
    </div>
    )
}

export default Nav