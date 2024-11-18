

/*
 * @Author: yangchenguang
 * @Description: 编辑
 * @Date: 2024-01-25 16:11:21
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-25 16:52:44
 */
import { Modal } from 'antd'

export default forwardRef(function EditForm(props, ref) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	// confim
	function handleOk() {
		setIsModalOpen(false)
	}
	// cancel
	function handleCancel() {
		setIsModalOpen(false)
	}
	// action - open
	function handleModalOpen() {
		setIsModalOpen(true)
	}
	
	// 向外暴露方法
	useImperativeHandle(ref, () => ({
		open: handleModalOpen
	}))

	return (
		<>
			<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	)
})