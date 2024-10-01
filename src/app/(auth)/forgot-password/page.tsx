import {LogoLogin} from '@/assets/images';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {IoMdArrowBack} from 'react-icons/io';

const ForgotPasswordPage = () => {
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
        <h2 className="mt-8 text-[36px] font-[700]"> Quên mật khẩu</h2>
        <span className="mx-20 text-[14px] text-[#8f8f8f] text-center">
          Chúng tôi sẽ gửi thông tin đổi mật khẩu đến địa chỉ email của bạn. Vui
          lòng kiểm tra email để cập nhật lại mật khẩu.
        </span>

        <Input
          className="w-[370px] bg-[#edf5f3] py-[28px] rounded-lg text-[15px] focus-visible:ring-0 mt-10"
          placeholder="Địa chỉ email"
        />

        <Link href={'/reset-password'}>
          <Button
            variant="destructive"
            className="bg-[#3bb19b] text-white font-bold w-[180px] h-[45px] rounded-[20px] mt-8 hover:bg-[#3bb19b] hover:opacity-90"
          >
            Xác nhận
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
