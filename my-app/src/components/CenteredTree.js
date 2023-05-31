import { useState, useEffect, useRef } from "react";
import Tree from "react-d3-tree";

const containerStyles = {
    width: '100%',
    height: '50vh',
}

const isJson = (str) => {
    if (str === undefined || str === null || str === '') return false;
    try {
        JSON.parse(str);
    } catch (e) {
        console.log(e);
        console.log(str);
        return false;
    }
    return true;
}

const CenteredTree = ({ Data }) => {
    const shouldRecenterTreeRef = useRef(true);
    const [treeTranslate, setTreeTranslate] = useState({ x: 0, y: 0 });
    const treeContainerRef = useRef(null);

    useEffect(() => {
        if (treeContainerRef.current && shouldRecenterTreeRef.current) {
            shouldRecenterTreeRef.current = false;
            const dimensions = treeContainerRef.current.getBoundingClientRect();

            setTreeTranslate({
                x: dimensions.width / 2,
                y: dimensions.height / 2,
            });
        }
    }, []);

    return (
        <div ref={treeContainerRef} style={containerStyles}>
            {isJson(Data) ?
                (<Tree
                    data={JSON.parse(Data)}
                    collapsible={true}
                    pathFunc="step"
                    translate={treeTranslate}
                    orientation="vertical"
                />
                ) :
                (<div>
                    <p>Invalid JSON</p>
                    <p>Please use the following schema</p>
                </div>)
            }
        </div>
    )
}

export default CenteredTree;