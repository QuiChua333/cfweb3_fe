const Funding = () => {
  return (
    <div>
      <div className="border-y-[1px] border-[#c8c8c8] px-8 py-7 bg-[#f5f5f5] sticky top-0">
        <span className="text-black font-semibold ">Chiến dịch / Gây quỹ</span>
      </div>
      <div className="px-8 py-7 w-[756px] flex-col">
        <span className="text-[#2a2a2a] font-medium text-2xl">
          Số Tiền Mục Tiêu Của Chiến Dịch{' '}
          <span className="text-red-600"> *</span>
        </span>
        <p className="mt-2 text-[#2a2a2a] text-justify">
          Bạn muốn quyên góp bao nhiêu tiền cho chiến dịch này? Yêu cầu số tiền
          mục tiêu tối thiểu là 10 triệu đồng.
        </p>
        <div className="w-[50%] bg-white border-[#ddd] border-[1px] flex items-center rounded-[2px] px-4 mt-8">
          <input
            type="text"
            maxLength={50}
            className="border-none block bg-white w-[100%] outline-none focus:outline-none text-sm"
          />
          <span className="text-[#949494] px-4 py-3">VND</span>
        </div>

        <hr className="border-[#ddd] my-[60px]" />
        <span className="text-[#2a2a2a] font-medium text-2xl">
          Xác minh người nhận tiền
        </span>
        <p className="mt-2 text-[#2a2a2a] text-justify">
          Chủ sở hữu chiến dịch phải được xác minh để khởi động chiến dịch. Việc
          xác minh ID sẽ được thực hiện một cách an toàn với bên thứ ba và tạo
          ra một nền tảng đáng tin cậy hơn cho bạn và những người ủng hộ bạn.
        </p>
        <div className="my-[40px] bg-[#24c97c] inline-block py-3 text-white font-medium px-4 rounded-sm hover:cursor-pointer hover:bg-[#2ba069]">
          TÀI KHOẢN ĐÃ XÁC MINH <span className="mx-1">&#10004;</span>
        </div>
        <hr className="border-[#ddd] mb-[60px]" />
        <span className="text-[#2a2a2a] font-medium text-2xl">
          Thông tin ngân hàng
        </span>
        <p className="mt-2 text-[#2a2a2a] text-justify">
          Điền thông tin tài khoản ngân hàng của bạn. Chúng tôi sẽ chỉ có thể
          gửi tiền cho bạn nếu bạn đã huy động được tối thiểu 4 triệu đồng.
        </p>

        <p className="text-[#2a2a2a] mt-[40px] text-[16px] font-semibold ">
          Số tài khoản <span className="text-red-600"> *</span>
        </p>

        <p className="text-[#6a6a6a] text-sm my-[10px] font-normal leading-5">
          Nhập số tài khoản mà bạn muốn nhận tiền. Hãy đảm bảo số tài khoản thật
          chính xác, nếu không chúng tôi sẽ không thể chuyển tiền cho bạn.
        </p>

        <input
          type="text"
          className="border-[1px] border-[#c8c8c8] py-4 px-4 border-solid w-full text-sm focus:border-black rounded-sm mb-[10px]"
        />

        <p className="text-[#6a6a6a] text-sm my-[10px] font-normal leading-5">
          Nhập lại số tài khoản.
        </p>

        <input
          type="text"
          className="border-[1px] border-[#c8c8c8] py-4 px-4 border-solid w-full text-sm focus:border-black rounded-sm"
        />

        <hr className="border-[#ddd] my-[60px]" />

        <div className="mb-[80px] bg-[#7a69b3] text-sm float-end py-3 text-white font-semibold px-4 rounded-sm hover:cursor-pointer hover:bg-[#574591]">
          LƯU VÀ TIẾP TỤC
        </div>
      </div>
    </div>
  );
};

export default Funding;
