'use client';

import {LogoLogin} from '@/assets/images';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa';

const LoginPage = () => {
  const [isShowPassword, setShowPassword] = useState(true);
  return (
    <div className="wrapper flex h-full">
      <div className="flex flex-[2] flex-col items-center gap-4">
        <h2 className="mt-[80px] text-[36px] font-[700]">Đăng nhập</h2>
        <Input
          className="w-[370px] bg-[#edf5f3] py-[28px] rounded-lg text-[15px] focus-visible:ring-0 mt-4"
          placeholder="Địa chỉ email"
        />
        <div className="bg-[#edf5f3] rounded-lg relative flex items-center">
          <Input
            type={!isShowPassword ? 'password' : 'text'}
            className="w-[370px] py-[28px]  text-[15px] focus-visible:ring-0 pr-[50px]"
            placeholder="Mật khẩu"
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

        <Button
          variant="destructive"
          className="bg-[#3bb19b] text-white font-bold w-[180px] h-[45px] rounded-[20px] mt-8 hover:bg-[#3bb19b] hover:opacity-90"
        >
          Đăng nhập
        </Button>

        <Link href={'/forgot-password'}>
          <span className="underline text-[#3bb19b] mt-5 hover:opacity-90">
            Quên mật khẩu?
          </span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col items-center bg-[#3bb19b] justify-center">
        <Image src={LogoLogin} width={120} height={120} alt="Logo Login" />
        <h1 className="text-white font-bold text-[20px] text-center mt-[60px] mx-10 self-center">
          Bạn chưa có tài khoản?
        </h1>

        <Link href={'/register'}>
          <Button
            variant="outline"
            className="bg-white text-black font-bold w-[180px] h-[45px] rounded-[20px] mt-8"
          >
            Đăng ký
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
