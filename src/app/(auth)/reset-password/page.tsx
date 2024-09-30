'use client';

import {LogoLogin} from '@/assets/images';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa';
import {IoMdArrowBack} from 'react-icons/io';

const ResetPasswordPage = () => {
  const [isShowPassword, setShowPassword] = useState(true);
  const [isShowConfirmPassword, setShowConfirmPassword] = useState(true);
  return (
    <div className="wrapper flex h-full">
      <div className="flex flex-1 flex-col items-center bg-[#3bb19b] justify-center">
        <Image src={LogoLogin} width={120} height={120} alt="Logo Login" />
        <Link href={'/login'}>
          <Button
            variant="outline"
            className="bg-white text-black font-bold w-[180px] h-[45px] rounded-[20px] mt-8"
          >
            <IoMdArrowBack className="mr-2" />
            Về Đăng nhập
          </Button>
        </Link>
      </div>
      <div className="flex flex-[2] flex-col items-center gap-4">
        <h2 className="mt-10 text-[36px] font-[700]">Cập nhật mật khẩu</h2>
        <div className="bg-[#edf5f3] rounded-lg relative flex items-center mt-8">
          <Input
            type={!isShowPassword ? 'password' : 'text'}
            className="w-[370px] py-[28px]  text-[15px] focus-visible:ring-0 pr-[50px]"
            placeholder="Mật khẩu mới"
          />
          {isShowPassword ? (
            <FaRegEye
              onClick={() => setShowPassword(false)}
              className="text-[24px] text-[#6e6e6e] absolute right-[14px] cursor-pointer hover:opacity-90"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setShowPassword(true)}
              className="text-[24px] text-[#6e6e6e] absolute right-[14px] cursor-pointer hover:opacity-90"
            />
          )}
        </div>

        <div className="bg-[#edf5f3] rounded-lg relative flex items-center ">
          <Input
            type={!isShowConfirmPassword ? 'password' : 'text'}
            className="w-[370px] py-[28px]  text-[15px] focus-visible:ring-0 pr-[50px]"
            placeholder="Xác nhận mật khẩu mới"
          />
          {isShowConfirmPassword ? (
            <FaRegEye
              onClick={() => setShowConfirmPassword(false)}
              className="text-[24px] text-[#6e6e6e] absolute right-[14px] cursor-pointer hover:opacity-90"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setShowConfirmPassword(true)}
              className="text-[24px] text-[#6e6e6e] absolute right-[14px] cursor-pointer hover:opacity-90"
            />
          )}
        </div>
        <Button
          variant="destructive"
          className="bg-[#3bb19b] text-white font-bold w-[180px] h-[45px] rounded-[20px] mt-8 hover:bg-[#3bb19b] hover:opacity-90"
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
