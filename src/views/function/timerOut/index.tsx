const Index = () => {
    // 是否默认执行
    // 暂停/继续/重新开始
    // 优化1.不重复创建计时器
    const timer = useRef<NodeJS.Timeout | null>(null);
    const [state, setState] = useState<number>(0);

    console.log("init");
    useEffect(() => {
        console.log("effect");
        Start()
    },[])

    const Start = () => {
        if(timer.current) return
        timer.current = setInterval(() => {
            setState(i => i + 1)
        },1000)
    }
    const Stop = () => {
        clearInterval(timer.current!)
        timer.current = null
    }
    const Reset = () => {
        setState(0)
    }
    return (
        <>
            {state}
            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
        </>
    );
};

export default Index;