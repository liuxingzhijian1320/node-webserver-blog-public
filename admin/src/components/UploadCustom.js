import React, { useState, useEffect } from 'react';
import { Upload, message, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const UploadCustom = ({
  imageUrl = '',
  imageSize = 2,
  imageLimit = 1,
  imageMultiple = false,
  fn,
}) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState('');

  useEffect(() => {}, []);

  let defaultFileList = [];

  if (imageUrl) {
    if (imageLimit === 1) {
      defaultFileList[0] = {
        uid: '1',
        name: 'yyy.png',
        status: 'done',
        url: imageUrl,
      };
    } else {
      let list = imageUrl.split(',') || '';
      list.forEach((code, index) => {
        defaultFileList.push({
          uid: index + 1,
          name: index + 1,
          status: 'done',
          url: code,
        });
      });
    }
  }

  const UploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">上传</div>
    </div>
  );

  function handleChange(info) {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false);
      if (info.file.response.code === 200) {
        fn('done', info.file.response.data.url);
      } else {
        message.error(info.file.response.message);
      }
    }
    if (info.file.status === 'removed') {
      let removeUrl = '';
      if (info && info.file && info.file.response) {
        removeUrl = info.file.response.data.url;
      } else {
        removeUrl = info.file.url;
      }
      fn('removed', removeUrl);
      setLoading(false);
    }
  }

  // 条件判断
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('图片格式只能JPG/PNG');
    }
    const isLt2M = file.size / 1024 / 1024 < imageSize;
    if (!isLt2M) {
      message.error(`图片大小不能大于${imageSize}MB!`);
    }
    return isJpgOrPng && isLt2M;
  }

  function onPreview(e) {
    setPreviewImg(e.url);
    setPreviewVisible(true);
  }

  function handleCancel() {
    setPreviewVisible(false);
  }

  return (
    <div>
      <Upload
        name="file"
        data={{
          bucket: process.env.NODE_ENV === 'development' ? 'test' : 'article',
        }}
        listType="picture-card"
        headers={{
          Authorization:
            'Bearer ' + localStorage.getItem('blog-userinfo-token'),
        }}
        defaultFileList={defaultFileList}
        multiple={imageMultiple}
        beforeUpload={beforeUpload}
        showUploadList={imageLimit === 1 ? false : true}
        onPreview={onPreview}
        onChange={handleChange}
        action={'/api/file/upload'}
      >
        {imageUrl && imageLimit === 1 ? (
          <img
            src={imageUrl}
            alt="img"
            style={{ width: '100%', maxHeight: '100%' }}
          />
        ) : (
          UploadButton
        )}
      </Upload>

      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img style={{ width: '100%' }} alt="img" src={previewImg} />
      </Modal>
    </div>
  );
};

export default UploadCustom;
