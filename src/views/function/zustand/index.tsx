// components
import A from "./components/A.tsx"
import B from "./components/B.tsx"
import C from "./components/C.tsx"

const Index = () => {
    console.log("父组件-渲染");
    return (
        <>
            <div className={"flex"}>
                <A />
                <B />
                <C />
            </div>
        </>
    );
};

export default Index;