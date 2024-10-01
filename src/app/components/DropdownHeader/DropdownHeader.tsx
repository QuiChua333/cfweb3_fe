import React from 'react';
import classNames from 'classnames/bind';
import style from './dropdown.module.scss';

const cx = classNames.bind(style);

interface IDropDownHeader {
  overflowHeader: boolean;
}

const DropdownHeader = ({overflowHeader}: IDropDownHeader) => {
  const listFieldGrouByCategory = [
    {
      category: 'Công nghệ & sự đổi mới',
      listFields: [
        'Thiết bị máy ảnh',
        'Năng lượng & Công nghệ xanh',
        'Thức ăn & đồ uống',
      ],
    },
    {
      category: 'Tạo phẩm sáng tạo',
      listFields: ['Nghệ thuật', 'Âm nhạc', 'Truyện tranh'],
    },
    {
      category: 'Dự án cộng đồng',
      listFields: ['Môi trường', 'Văn hóa'],
    },
  ];
  const handleClickCategory = (category: string) => {};
  const handleClickField = (field: string) => {};
  return (
    <div className={cx('wrapper', {overflowHeader})} style={style}>
      <div className={cx('inner')}>
        <div className={cx('banner-wrapper')}>
          <a
            onClick={() => handleClickCategory('Tất cả')}
            className={cx('label-banner')}
          >
            Khám Phá Toàn Bộ Dự Án
          </a>
          <div className={cx('banner')}>
            <img src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/homepage/cf-bg-desktop-lg.jpg" />
            <p className={cx('description')}>GIVE FUN</p>
          </div>
        </div>
        <div className={cx('categories')}>
          {listFieldGrouByCategory.map((item, index) => {
            return (
              <div
                key={index}
                className={cx('category', {
                  third: index === 2,
                  second: index === 1,
                  first: index === 0,
                })}
              >
                <a
                  onClick={() => handleClickCategory(item.category)}
                  className={cx('label')}
                >
                  {item.category}
                </a>

                <div className={cx('list-field', {first: index === 0})}>
                  {item.listFields.map((item2, index2) => {
                    return (
                      <div
                        onClick={() => handleClickField(item2)}
                        key={index2}
                        className={cx('field-item')}
                      >
                        <span>
                          <a>{item2}</a>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropdownHeader;
