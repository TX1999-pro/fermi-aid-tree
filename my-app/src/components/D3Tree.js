import Tree from 'react-d3-tree';
// This is a simplified example of a chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.

const myData =
{
    "name": "Total Hours Required",
    "children": [
        {
            "name": "Tuition Fees",
            "children": [
                {
                    "name": "Annual Tuition Fee",
                    "attributes": { "estimate": 0 }
                },
                {
                    "name": "Scholarships",
                    "children": [
                        {
                            "name": "Number of Scholarships",
                            "attributes": {}
                        },
                        {
                            "name": "Amount per Scholarship",
                            "attributes": {}
                        }
                    ]
                }
            ]
        },
        {
            "name": "Living Expenses",
            "children": [
                {
                    "name": "Accommodation",
                    "children": [
                        {
                            "name": "Rent per Month",
                            "attributes": {}
                        },
                        {
                            "name": "Number of Months",
                            "attributes": {}
                        }
                    ]
                },
                {
                    "name": "Utilities",
                    "attributes": {}
                },
                {
                    "name": "Food",
                    "attributes": {}
                },
                {
                    "name": "Transportation",
                    "attributes": {}
                },
                {
                    "name": "Other Expenses",
                    "attributes": {}
                }
            ]
        },
        {
            "name": "TA Salary",
            "children": [
                {
                    "name": "Hourly Wage",
                    "attributes": {}
                },
                {
                    "name": "Number of Weeks",
                    "attributes": {}
                },
                {
                    "name": "Number of Hours per Week",
                    "attributes": {}
                }
            ]
        }
    ]
}


export default function OrgChartTree(Data) {

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{ width: '100em', height: '100em' }}>
            <Tree
                data={Data}
                orientation="vertical"
                pathFunc="step"
            />
        </div>
    );
}