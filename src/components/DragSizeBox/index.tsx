import { ReactNode, Children } from "react";

const Index = ({ children }: { children: ReactNode }) => {
    const bigBox = useRef<HTMLDivElement>(null);
    const moveBox = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback((e: MouseEvent) => {
        e.preventDefault();
        console.log(e, "e");
        const disX = e.clientX;
        const disY = e.clientY;
        const boxW = bigBox.current!.offsetWidth;
        const boxH = bigBox.current!.offsetHeight;

        const handleMouseMove = (e: MouseEvent) => {
            console.log(e, "e");
            const _disX = e.clientX - disX;
            const _disY = e.clientY - disY;
            const _boxW = boxW + _disX;
            const _boxH = boxH + _disY;
            bigBox.current!.style.width = _boxW + "px";
            bigBox.current!.style.height = _boxH + "px";
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            console.log("mouseup");
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }, []);

    useEffect(() => {
        moveBox.current!.addEventListener("mousedown", handleMouseDown);
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [handleMouseDown]);

    return (
        <>
            {Children.count(children)}
            <div ref={bigBox} className={"w-80 h-96 border-2 border-solid border-blue-950 relative"}>
                {children}
                <div ref={moveBox} className={"w-4 h-4 cursor-move absolute right-0 bottom-0 bg-amber-500"}></div>
            </div>
        </>
    );
};

export default Index;