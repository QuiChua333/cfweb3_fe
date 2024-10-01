'use client';
import React from 'react';
import {motion} from 'framer-motion';
import classNames from 'classnames/bind';
import style from './hero.module.scss';
import Image from 'next/image';
import {HeroImage} from '@/assets/images';

const cx = classNames.bind(style);

const Hero = () => {
  return (
    <div className={cx('wrapper')}>
      <motion.div
        className={cx('content')}
        initial={{y: -65, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{type: 'spring', duration: 2.6, delay: 0.45}}
      >
        <h5>#2 Trending</h5>
        <h4>Website hỗ trợ gây quỹ cộng đồng</h4>
        <h1>GIVE - FUN</h1>
        <p>
          Tham gia cùng chúng tôi để hiện thực hóa một thế giới tốt đẹp hơn,{' '}
          <br /> đồng thời bạn cũng có thể nhận lại được những lợi ích từ các dự
          án của GiveFun!!
        </p>
      </motion.div>

      <motion.div
        initial={{x: 150, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: 'spring', duration: 2.6, delay: 0.15}}
      >
        <Image
          width={260}
          height={260}
          src={HeroImage}
          className={cx('image-hero')}
          alt="Hero Image"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
