const ExampleFermiTree1 = {
    "name": "Nurseries in Manchester",
    "attributes": {
        "unit": "nurseries",
        "type": "Fermi"
    },
    "children": [
        {
            "name": "Population of Manchester",
            "attributes": {
                "unit": "people",
                "type": "Lookup"
            }
        },
        {
            "name": "Families with children in Manchester",
            "attributes": {
                "unit": "families",
                "type": "Fermi"
            },
            "children": [
                {
                    "name": "Fraction of families with children",
                    "attributes": {
                        "unit": "1",
                        "type": "OOM"
                    }
                },
                {
                    "name": "Average number of children per family",
                    "attributes": {
                        "unit": "children / family",
                        "type": "OOM"
                    }
                }
            ]
        },
        {
            "name": "Nurseries per family with children",
            "attributes": {
                "unit": "nurseries / family",
                "type": "Fermi"
            },
            "children": [
                {
                    "name": "Average number of nurseries per family",
                    "attributes": {
                        "unit": "nurseries / family",
                        "type": "OOM"
                    }
                },
                {
                    "name": "Fraction of families using nurseries",
                    "attributes": {
                        "unit": "1",
                        "type": "OOM"
                    }
                }
            ]
        }
    ]
}

const ExampleFermiTree2 = {
    "name": "Renewable Energy Generation Capacity in a Country",
    "attributes": {
        "unit": "megawatts",
        "type": "Fermi"
    },
    "children": [
        {
            "name": "Land Area of the Country",
            "attributes": {
                "unit": "square kilometers",
                "type": "Lookup"
            }
        },
        {
            "name": "Solar Energy Potential per Square Kilometer",
            "attributes": {
                "unit": "megawatts per square kilometer",
                "type": "OOM"
            }
        },
        {
            "name": "Wind Energy Potential per Square Kilometer",
            "attributes": {
                "unit": "megawatts per square kilometer",
                "type": "OOM"
            }
        },
        {
            "name": "Hydro Energy Potential",
            "attributes": {
                "unit": "megawatts",
                "type": "Fermi"
            }
        }
    ]
}

const ExampleFermiTree3 = {
    "name": "Daily Sales in a Retail Store",
    "attributes": {
        "unit": "dollars",
        "type": "Fermi"
    },
    "children": [
        {
            "name": "Number of Store Visitors per Day",
            "attributes": {
                "unit": "people",
                "type": "Fermi"
            }
        },
        {
            "name": "Conversion Rate of Visitors to Customers",
            "attributes": {
                "unit": "percentage",
                "type": "OOM"
            }
        },
        {
            "name": "Average Purchase Amount per Customer",
            "attributes": {
                "unit": "dollars",
                "type": "OOM"
            }
        }
    ]
}

const ExampleFermiTree4 = {
    "name": "Renewable Energy Generation Capacity in a Country",
    "attributes": {
        "unit": "megawatts",
        "type": "Fermi"
    },
    "children": [
        {
            "name": "Land Area of the Country",
            "attributes": {
                "unit": "square kilometers",
                "type": "Lookup"
            }
        },
        {
            "name": "Solar Energy Potential per Square Kilometer",
            "attributes": {
                "unit": "megawatts per square kilometer",
                "type": "OOM"
            }
        },
        {
            "name": "Wind Energy Potential per Square Kilometer",
            "attributes": {
                "unit": "megawatts per square kilometer",
                "type": "OOM"
            },
            "children": [
                {
                    "name": "Average Wind Speed",
                    "attributes": {
                        "unit": "meters per second",
                        "type": "OOM"
                    }
                },
                {
                    "name": "Efficiency of Wind Turbines",
                    "attributes": {
                        "unit": "percentage",
                        "type": "OOM"
                    }
                }
            ]
        },
        {
            "name": "Hydro Energy Potential",
            "attributes": {
                "unit": "megawatts",
                "type": "Fermi"
            },
            "children": [
                {
                    "name": "Number of Suitable Rivers",
                    "attributes": {
                        "unit": "count",
                        "type": "Fermi"
                    }
                },
                {
                    "name": "Average Flow Rate of Rivers",
                    "attributes": {
                        "unit": "cubic meters per second",
                        "type": "OOM"
                    }
                },
                {
                    "name": "Efficiency of Hydro Power Plants",
                    "attributes": {
                        "unit": "percentage",
                        "type": "OOM"
                    },
                    "children": [
                        {
                            "name": "Turbine Efficiency",
                            "attributes": {
                                "unit": "percentage",
                                "type": "OOM"
                            }
                        },
                        {
                            "name": "Generator Efficiency",
                            "attributes": {
                                "unit": "percentage",
                                "type": "OOM"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}

export { ExampleFermiTree1, ExampleFermiTree2, ExampleFermiTree3, ExampleFermiTree4 };