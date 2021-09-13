import React, { useEffect, useState } from 'react';
import { Modal, Input, message, Form, Button } from 'antd';
import { getCateDetail, addCateOne, updateCateOne } from '../assets/api/cate';

function CateAddUpdate(props) {
  const id = props.selectData?.id || 0;
  const [detail, setDetail] = useState({});
  let [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      getDetail();
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const getDetail = () => {
    getCateDetail({ id }).then((res) => {
      setDetail(res);
      form.setFieldsValue(res);
    });
  };

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  };

  const updateField = (e) => {
    setDetail({
      ...detail,
      [e.target.id]: e.target.value,
    });

    form.setFieldsValue({
      [e.target.id]: e.target.value,
    });
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    if (!props.selectData.id) {
      addCateOne({ ...values }).then((res) => {
        message.success(res.message);
        props.fn({ needReload: true });
      });
    } else {
      updateCateOne({ ...values, id, status: values.status - 0 }).then(
        (res) => {
          message.success(res.message);
          props.fn({ needReload: true });
        }
      );
    }
  };
  return (
    <Modal
      width="40%"
      footer={null}
      title={props.selectData.id ? '编辑分类' : '新增分类'}
      visible={props.showAddUpdate}
      onCancel={props.fn}
    >
      <div className="map-model-content">
        <div id="container" style={{ width: '100%' }}>
          <Form {...layout} name="basic" onFinish={onFinish} form={form}>
            <Form.Item
              onChange={updateField}
              label="名称"
              name="name"
              rules={[
                {
                  required: true,
                  message: '请输入名称',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default CateAddUpdate;
