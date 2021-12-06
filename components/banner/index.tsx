import React from "react";
import 'tailwindcss/tailwind.css';
import cn from 'classnames';
import styles from '../../styles/component.module.css';

type BannerProps = {
  className?: string
  reverse?: boolean | false, //实现插图展示区和文本区的左右互换
  children: JSX.Element, //填写文本子组件
  imageUrl?: string | '',//其实这是tailwind属性填写项
  rotateAngle?: number | 0//填写图片旋转钻角度
}

function Banner(props: BannerProps){
  let rotateNum = props.rotateAngle || 0;
  const reverse = props.reverse || false;
  const imageUrl = props.imageUrl || '';
  const rotate = (Math.abs(rotateNum)).toString();

  return (
    <div className={cn(
      styles.bannerHeight,
      'w-full',
      'flex',
      'flex-col',
      'justify-end',
      'items-center',
      props.className
    )}>
      <div className={cn(
        'w-full',
        'flex', 
        'items-center',
        'justify-around',
        {
          ['flex-row-reverse']: reverse === true,
          ['flex-row']: reverse === false
        }
      )}>
        <div className='flex'>{props.children}</div>
        <div className={cn(
          styles.showImg,
          imageUrl,
          'bg-cover',
          'bg-center',
          {
            [`transform rotate-${rotate}`]: rotateNum > 0,
            [`transform -rotate-${rotate}`]: rotateNum < 0
          }
        )}/>
      </div>
    </div>
  );
}

export default Banner;