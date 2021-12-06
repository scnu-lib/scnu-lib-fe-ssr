import React from "react";
import cn from 'classnames';
import 'tailwindcss/tailwind.css';

type FooterProps = {
  className?: string,
  children?: JSX.Element
}

function Footer(props: FooterProps){
  return (
    <div className={cn(
      'flex',
      'items-center',
      'justify-center',
      'bg-black',
      'p-8',
      'w-full'
    )}>
      {props.children}
    </div>
  );
}

export default Footer;