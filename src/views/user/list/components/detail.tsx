

/*
 * @Author: yangchenguang
 * @Description: 用户详情
 * @Date: 2024-04-19 15:37:36
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-04-19 16:52:04
 */
import { Button, Modal } from 'antd';

type Props = {
  // open: boolean
  // cancel: () => void
  // ok: () => void
}

const Detail = forwardRef(({  }: Props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      open: (a) => { console.log(a,"a"); setOpen(true)}
    }
  })

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    // setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    // setOpen(false);
  };
  return <>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            提交
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  </>
})

export default Detail