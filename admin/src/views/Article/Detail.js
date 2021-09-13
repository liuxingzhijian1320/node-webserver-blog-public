import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import {
  Card,
  Layout,
  Form,
  Input,
  Select,
  Button,
  message,
  Result,
} from 'antd';
import _ from 'lodash';
import Editor from 'for-editor';
import { getArticleDetail, postArticlelDetail } from '../../assets/api/article';
import { getCateList } from '../../assets/api/cate';
import { uploadPic } from '../../assets/api/upload';
import { userAuth } from '../../assets/api/user';

import UploadCustom from '../../components/UploadCustom';
const { Option } = Select;
const { Content } = Layout;
const { TextArea } = Input;

function HotelDetail(props) {
  const { id } = props.match.params;
  let [form] = Form.useForm();
  const [detail, setDetail] = useState({});
  const [cateList, setCateList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  let vm = useRef(null);

  useEffect(() => {
    getAuth();
  }, [form, id]);

  const getAuth = () => {
    userAuth().then((res) => {
      if (res.data.auth.indexOf('sle') > -1) {
        setLoading(true);
        getDetail(id);
        getCatelist();
      } else {
        setAuth(true);
      }
    });
  };

  const getCatelist = () => {
    getCateList().then((res) => {
      setCateList(res.list);
    });
  };

  const getDetail = (id) => {
    getArticleDetail({ id }).then((res) => {
      setDetail(res);
      setLoading(false);
    });
  };

  const uploadSuccess = (type, data) => {
    if (type === 'done') {
      setDetail({
        ...detail,
        cover: data,
      });
    } else if (type === 'removed') {
      setDetail({
        ...detail,
        cover: '',
      });
    }
  };

  const updateField = (e) => {
    // console.log(444, e.target.name, e.target.value);
    setDetail({
      ...detail,
      [e.target.id]: e.target.value,
    });

    form.setFieldsValue({
      [e.target.id]: e.target.value,
    });
  };

  const selectType = (e) => {
    let str = e && e.join(',');
    form.setFieldsValue({
      tag: str,
    });
    setDetail({
      ...detail,
      tag: str,
    });
    // console.log(12313, form.getFieldsValue());
  };

  const handleEditorAddImg = async ($file) => {
    const bucket = process.env.NODE_ENV === 'development' ? 'test' : 'article';

    await uploadPic($file, bucket)
      .then((res) => {
        if (res.code === 200) {
          vm.current.$img2Url($file.name, res.url);
          message.success('上传成功!');
        } else {
          message.error(res.message);
        }
      })
      .catch((err) => {
        console.info(123, err);
      });
  };

  const back = () => {
    props.history.goBack(-1);
  };
  const handleEditorChange = (e) => {
    console.log('handleEditorChange', e);
    form.setFieldsValue({
      content: e,
    });
    setDetail({
      ...detail,
      content: e,
    });
  };
  const handleEditorSave = (e) => {
    console.log('handleEditorSave', e);
    form.setFieldsValue({
      content: e,
    });
    setDetail({
      ...detail,
      content: e,
    });
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    console.log('Success---detail:', detail);

    let params = _.cloneDeep({ ...detail, ...values });

    let newParams = _.pick(params, [
      'id',
      'title',
      'introduction',
      'tag',
      'content',
      'browser',
      'cover',
    ]);

    postArticlelDetail(newParams).then(() => {
      message.success('保存成功');
      props.history.goBack();
    });
  };

  return (
    <div>
      <Content>
        <Card loading={loading} title="文章详情" style={{ marginTop: '10px' }}>
          {auth && (
            <Result
              status="warning"
              title="暂无权限访问"
              extra={
                <Button type="primary" key="console">
                  <Link to={'/article'}>返回</Link>
                </Button>
              }
            />
          )}
          {detail.id && (
            <Form
              form={form}
              labelCol={{ span: 4 }}
              initialValues={detail}
              onFinish={onFinish}
              layout="horizontal"
            >
              <Form.Item
                label="标题"
                name="title"
                onChange={updateField}
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: '请输入标题!',
                  },
                ]}
              >
                <Input style={{ width: 400 }} placeholder="请输入标题" />
              </Form.Item>
              <Form.Item
                label="封面"
                name="cover"
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: '请上传封面图!',
                  },
                ]}
              >
                <UploadCustom imageUrl={detail.cover} fn={uploadSuccess} />
              </Form.Item>

              <Form.Item label="标签" name="tagList">
                <div>
                  <Select
                    style={{ width: 400 }}
                    defaultValue={detail.taglist.map((c) => c.id) || []}
                    onChange={selectType}
                    mode="multiple"
                  >
                    {cateList.map((item) => (
                      <Option value={item.id} key={item.id}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                  <Button onClick={() => getCatelist()}>刷新</Button>
                </div>
              </Form.Item>

              <Form.Item
                label="浏览量"
                name="browser"
                onChange={updateField}
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: '请输入名称!',
                  },
                ]}
              >
                <Input style={{ width: 400 }} placeholder="请输入名称" />
              </Form.Item>

              <Form.Item label="状态">
                {detail.is_del === 0 ? '下架' : '上架'}
              </Form.Item>

              <Form.Item
                label="简介"
                name="introduction"
                onChange={updateField}
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: '请输入简介!',
                  },
                ]}
              >
                <TextArea
                  style={{ width: 700 }}
                  autoSize
                  placeholder="请输入简介"
                />
              </Form.Item>

              <Form.Item
                label="内容"
                name="content"
                validateTrigger="onBlur"
                onChange={updateField}
                rules={[
                  {
                    required: true,
                    message: '请输入内容!',
                  },
                ]}
              >
                {/* 
                  参数解释：https://github.com/kkfor/for-editor

                  key           type    default       desc
                  --------------------------------------------
                  value	        String	-	            输入框内容
                  placeholder	  String	开始编辑...	   占位文本
                  lineNum	      Boolean	true	        是否显示行号
                  style	        Object	-	            编辑器样式
                  height	      String	600px	        编辑器高度
                  preview	      Boolean	false	        预览模式
                  expand	      Boolean	false	        全屏模式
                  subfield	    Boolean	false	        双栏模式(预览模式激活下有效)
                  language	    String	zh-CN	        语言(支持 zh-CN:中文简体, en:英文)
                  toolbar	      Object	如下	         自定义工具栏


                  toolbar: {
                      h1: true, // h1
                      h2: true, // h2
                      h3: true, // h3
                      h4: true, // h4
                      img: true, // 图片
                      link: true, // 链接
                      code: true, // 代码块
                      preview: true, // 预览
                      expand: true, // 全屏
                      // v0.0.9 
                      undo: true, // 撤销
                      redo: true, // 重做
                      save: true, // 保存
                      // v0.2.3 
                      subfield: true, // 单双栏模式
                  }

                  事件
                  name	    params    参数	   default	 description
                  onChange	String:   value	   -	      内容改变时回调
                  onSave	  String:   value	   -	      保存时回调
                  addImg	  File:     file     -	      添加图片时回调
                */}
                <Editor
                  ref={vm}
                  value={detail.content}
                  placeholder={'hello world！'}
                  onSave={handleEditorSave}
                  onChange={handleEditorChange}
                  addImg={handleEditorAddImg}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 4 }}>
                <Button onClick={back} type="info" htmlType="submit">
                  返回
                </Button>

                <Button
                  type="primary"
                  style={{ marginLeft: 30 }}
                  htmlType="submit"
                >
                  提交
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
      </Content>
    </div>
  );
}

export default withRouter(HotelDetail);
