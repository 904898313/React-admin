import { useCountStore } from "@/store"

const A = () => {
    console.log("A 组件渲染");
    const { user,changeUserName, incrementAge, decrementAge,  } = useCountStore((state) => state)
    return (
        <div className={"mr-10"}>
            <h1>组件A</h1>
            <p>userName: {user.userName}</p>
            <p>age: {user.age}</p>
            <button onClick={() => changeUserName('ycg A')}>change username: ycg A</button>
            <button onClick={() => incrementAge()}>user.age +</button>
            <button onClick={() => decrementAge()}>user.age -</button>
        </div>
    );
};

export default A;