import { useCountStore } from "@/store"
import { useShallow } from "zustand/react/shallow";

const B = () => {
    console.log("B 组件渲染");
    const { changeUserName, incrementAge, decrementAge } = useCountStore(useShallow(
        (state) => ({
            changeUserName: state.changeUserName,
            incrementAge: state.incrementAge,
            decrementAge: state.decrementAge,
        })
    ))
    const age = useCountStore(useShallow((state) => state.user.age))
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