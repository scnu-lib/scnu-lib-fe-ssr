import React from "react";
import cn from 'classnames';
import "tailwindcss/tailwind.css";
import Nav from "./nav";
import Footer from "./footer";

function Layout(props: {className? : string, children? : JSX.Element}){
  function onSreenWidth(){
    if(window){
      let width: number = window.document.body.clientWidth;
    }
  }
  const chosenItem = [
    {title: '首页', Url: '/'},
    {title: '活动', Url : '/activityPage'}
  ];

  return (
    <div className={cn(
      'w-full',
      'h-screen',
      'flex',
      'flex-col',
      'layout-window',
      'relative',
      'top-0',
      'overflow-auto'
      )}>
        <Nav choseItem={chosenItem} className={cn('flex-grow-0')}></Nav>
        <div className={cn(
          'flex',
          'w-full',
          'flex-grow',
          'flex-col',
          'justify-between'
        )}>
          {props.children}
          <Footer>
            <div className={cn('flex', 'flex-col', 'items-center')}>
              <div className={cn('text-white')}>华师阅马开发小分队</div>
              <div className={cn('text-white')}>联系我们</div>
            </div>
          </Footer>
        </div>
    </div>
    )
}

export default Layout
