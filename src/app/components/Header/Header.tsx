'use client';
import React, {useEffect, useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import classNames from 'classnames/bind';
import {FaAngleDown} from 'react-icons/fa6';
import style from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {DefaultAvatar} from '@/assets/images';
import DropdownHeader from '@/app/components/DropdownHeader';

const cx = classNames.bind(style);

const Header = () => {
  const [activeExplore, setActiveExplore] = useState(false);
  const [overflowHeader, setOverflowHeader] = useState(false);

  useEffect(() => {
    const changeBackgroundHeader = () => {
      if (window.scrollY >= 40) {
        setOverflowHeader(true);
      } else {
        setOverflowHeader(false);
      }
    };
    window.addEventListener('scroll', changeBackgroundHeader);

    return () => {
      window.removeEventListener('scroll', changeBackgroundHeader);
    };
  }, []);
  return (
    <div
      className={cx('wrapper', {
        active: overflowHeader,
        activeDropdown: activeExplore,
      })}
    >
      <div className={cx('inner')}>
        <div className={cx('group')}>
          <div className={cx('button-search')}>
            <Link href="/explore">
              <AiOutlineSearch className={cx('icon-search')} />
            </Link>
          </div>

          <div className={cx('nav-list')}>
            <div
              onClick={() => setActiveExplore((prev) => !prev)}
              className={cx('explore')}
            >
              <a className="flex items-center gap-1">
                Khám phá
                <FaAngleDown className={cx('icon', {active: activeExplore})} />
              </a>
            </div>
            <div>
              <Link href="/about-us">Về chúng tôi</Link>
            </div>
          </div>
        </div>

        <div className={cx('flex')}>
          <Link href="/" className={cx('icon-logo')}>
            GIVE - FUN
          </Link>
        </div>
        <div className={cx('group')}>
          <div className={cx('nav-list')}>
            <div className={cx('create-campaign')}>
              <Link href="/start-a-campaign">Tạo chiến dịch</Link>
            </div>
            {true && (
              <>
                <div className={cx('sign-in')}>
                  <Link href="/login">Đăng nhập</Link>
                </div>
                <div>
                  <Link href="/register">Đăng ký</Link>
                </div>
              </>
            )}
            {false && (
              <div className={cx('user-section')}>
                <Image
                  className={cx('user-avatar')}
                  src={DefaultAvatar}
                  width={32}
                  height={32}
                  alt="avatar"
                />
                <span className={cx('user-name')}>
                  Huỳnh Ngọc Quí
                  <FaAngleDown className={cx('icon', {active: false})} />
                </span>
                {false && (
                  <div className={cx('dropdownBoxFilter')}>
                    {false && (
                      <>
                        <Link href={`/individuals/123/campaigns`}>
                          Chiến dịch của tôi
                        </Link>
                        <Link href={`/individuals/123/contributions`}>
                          Đóng góp của tôi
                        </Link>
                        <Link href={`/individuals/123/profile`}>Hồ sơ</Link>
                        <Link href={`/individuals/123/edit/settings`}>
                          Cài đặt
                        </Link>
                      </>
                    )}
                    {false && <Link href={`/admin`}>Đến trang quản lý</Link>}
                    <span style={{paddingBottom: '16px'}}>Đăng xuất</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {activeExplore && <DropdownHeader overflowHeader={overflowHeader} />}
    </div>
  );
};

export default Header;
