const Child = ({num}:{num:string}) => {

    console.log("child update");

    return (
        <>
            {num}
        </>
    );
};

export default Child;