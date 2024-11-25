import { useCountStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

const Index = () => {
    console.log(1, "1");
    const store = useCountStore(useShallow((state) => state));
    return (
        <>
            a:{store.user.a}--
            b:{store.user.b}
            <div onClick={() => store.increment()}>+</div>
            <div onClick={() => store.decrement()}>-</div>
        </>
    );
};

export default Index;