import {Modal} from "antd";
import {ForwardedRef} from "react";

interface Props {
    isModalOpen: boolean;
    handleOk?: () => void;
    handleCancel?: () => void;
}
const Detail = forwardRef(({isModalOpen,handleOk,handleCancel}:Props,ref: ForwardedRef<HTMLInputElement>) => {
    return <>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <input ref={ref}/>
        </Modal>
    </>
})

export default Detail