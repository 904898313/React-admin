import Child from "./child.tsx"

const Index = () => {
    const [value,setValue] = useState("123");
    const deferredValue = useDeferredValue(value)
    return (
        <>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <Child num={deferredValue}/>
        </>
    );
};

export default Index;