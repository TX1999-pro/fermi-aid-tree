const ExampleTreeOne = {
    "name": "Root",
    "children": [
        {
            "name": "Node 1",
            "attributes": {
                "attribute1": "Value 1",
                "attribute2": 10
            },
            "children": [
                {
                    "name": "Subnode 1.1",
                    "attributes": {
                        "attribute1": "Value 1",
                        "attribute2": 10
                    },
                },
                {
                    "name": "Subnode 1.2"
                }
            ]
        },
        {
            "name": "Node 2",
            "children": [
                {
                    "name": "Subnode 2.1",
                    "attributes": {
                        "attribute3": true
                    }
                },
                {
                    "name": "Subnode 2.2"
                },
                {
                    "name": "Subnode 2.3"
                }
            ]
        }
    ]
}

export { ExampleTreeOne };