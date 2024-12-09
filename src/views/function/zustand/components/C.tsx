import { useCountStore } from "@/store"

const C = () => {
    console.log("C 组件渲染");
    useEffect(() => {
        const sub = useCountStore.subscribe((state, prevState) => {
            console.log(state, prevState, "最小值, 上一次更新值, C 组件 订阅到了");
        })
        return () => {
            sub()
        }
    },[])
    return (
        <div>
            <h1>组件C</h1>
            <p>订阅组件</p>
        </div>
    );
};

export default C;