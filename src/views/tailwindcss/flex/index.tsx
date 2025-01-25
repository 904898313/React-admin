import { Alert } from "antd";

const bgColorList = [
    "bg-slate-500",
    "bg-gray-500",
    "bg-zinc-500",
    "bg-neutral-500",
    "bg-stone-500",
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-slate-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500",
]

const Index = () => {
    return (
        <>
            <Alert
                message={"tailwindcss 弹性布局的类名分别是：flex、flex-row、flex-col、flex-wrap、flex-nowrap、flex-row-reverse、flex-col-reverse"}
                description={<></>}
                type={"success"}
            ></Alert>
            <div className={"flex w-full flex-wrap justify-around"}>
                {
                    bgColorList.map((item,index) => {
                        return <div
                            className={`${item} w-96 h-8 ${index === bgColorList.length-1 ? 'grow' : ''}`}
                        >
                        </div>
                    })
                }
            </div>
        </>
    );
};

export default Index;