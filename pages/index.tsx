import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css';
import comStyle from '../styles/component.module.css';
import 'tailwindcss/tailwind.css'
import cn from 'classnames';

const Home: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  //获取当前路由地址可通过router.pathname判断
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner imageUrl = {comStyle.bannerBg}>
          <div className={cn('flex', 'flex-col', 'items-end', 'justify-center')}>
            <div className={cn('text-gray-300', 'text-lg', 'font-semibold')}>欢迎<br />WELCOME</div>
            <div className={cn(comStyle.primaryFont, 'text-5xl', 'font-bold')}>来到华师阅马平台</div>
            <div className={cn('text-3xl', 'font-extrabold')}>SCNU-LIB</div>  
          </div>  
        </Banner>
        <Banner 
          className = {cn('mb-14')}
          reverse = {true} 
          imageUrl = {comStyle.introBg} 
          rotateAngle={0}
        >
          <div className={cn(comStyle.introWd, 'flex', 'flex-col', 'items-start', 'justify-center')}>
            <div className={cn('text-gray-300', 'text-4xl', 'font-bold')}>关于我们</div>
            <div className={cn(comStyle.primaryFont, 'text-base', 'font-semibold')}>这里有活动的发布和查看，</div>
            <div className={cn('text-3xl', 'font-extrabold')}>SCNU-LIB</div>  
          </div> 
        </Banner>
      </main>      
    </div>
  )
}

export const getStaticProps: GetStaticProps =async ()=>{
  //测试用,后期封装
  let res = await fetch('https://lib.scnu.life/api/activity/activities?labels&sort=id,DESC',{method: 'get'});
  let data =await res.json();
  return {
    props: {data},
  };
}

export default Home