import { useCountStore } from "@/store"
import { useShallow } from "zustand/react/shallow";

const B = () => {
    console.log("B 组件渲染");
    // 返回对象的时候，使用useShallow进行浅比较，避免返回引用数据类型zustand判断到数据不一样，从而触发无限渲染。
    const { changeUserName, incrementAge, decrementAge } = useCountStore(useShallow(
        (state) => ({
            changeUserName: state.changeUserName,
            incrementAge: state.incrementAge,
            decrementAge: state.decrementAge,
            age: state.decrementAge,
        })
    ))
    // 一个组件可以有多个useStore
    // 只返回页面使用到的数据，避免不必要的渲染
    const age = useCountStore((state) => state.user.age)
    return (
        <div className={"mr-10"}>
            <h1>组件B</h1>
            <p>age: {age}</p>
            <button onClick={() => changeUserName('ycg B')}>change username: ycg B</button>
            <button onClick={() => incrementAge()}>user.age +</button>
            <button onClick={() => decrementAge()}>user.age -</button>
        </div>
    );
};

export default B;