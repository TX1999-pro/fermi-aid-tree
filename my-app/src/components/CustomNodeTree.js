import React from "react";
import Tree from "react-d3-tree";
import { useCallback, useState } from "react";

// source: https://codesandbox.io/s/rd3t-v2-custom-with-foreignobject-0mfj8?file=/src/App.js

const useCenteredTree = () => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const containerRef = useCallback((containerElem) => {
        if (containerElem !== null) {
            const { width, height } = containerElem.getBoundingClientRect();
            setTranslate({ x: width / 2, y: height / 2 });
        }
    }, []);
    return [translate, containerRef];
};

const containerStyles = {
    width: "100%",
    height: "50vh"
};

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps
}) => (
    <g>
        <circle r={60}></circle>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
            <div className="custom-node">
                <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
                {renderNodeAttribute({ nodeDatum })}
                {nodeDatum.children && (
                    <button style={{ width: "100%" }} onClick={toggleNode}>
                        {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
                    </button>
                )}
            </div>
        </foreignObject>
    </g>
);

const renderNodeAttribute = ({ nodeDatum }) => (
    <div className="node-attribute">
        {nodeDatum.attributes && (
            Object.entries(nodeDatum.attributes).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>)
            )
        )}
    </div>
);

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

export default function CustomNodeTree({ Data }) {
    const [translate, containerRef] = useCenteredTree();
    const nodeSize = { x: 200, y: 250 };
    const foreignObjectProps = {
        width: nodeSize.x,
        height: nodeSize.y,
        x: -nodeSize.x / 2,
        y: -nodeSize.y / 2
    };
    return (
        <div ref={containerRef} style={containerStyles} >
            {isJson(Data) ?
                (<Tree
                    data={JSON.parse(Data)}
                    translate={translate}
                    nodeSize={nodeSize}
                    renderCustomNodeElement={(rd3tProps) =>
                        renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
                    }
                    orientation="vertical"
                    pathFunc="diagnoal"
                />
                ) :
                (<div>
                    <p>Invalid JSON</p>
                    <p>Please check your input</p>
                </div>)
            }

        </div>
    );
}
