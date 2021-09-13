import axios from 'axios';

// 获取token
export async function uploadPic(file, bucket) {
  const token = localStorage.getItem('blog-userinfo-token') || '';

  const url = `/api/file/upload`;
  var formdata = new FormData();
  formdata.append('file', file);
  formdata.append('bucket', bucket);

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.info('uploadPic--success', res);
        resolve(res.data);
      })
      .catch((err) => {
        console.info('uploadPic--err', err);
        reject(err);
      });
  });
}
