def get_visualizations(data):
    try:
        response = {
            "visualization": True,
            "message": "Here is a breakdown of your spending by category.",
            "data": {
                "type": "bar-graph",
                "title": "Spending based on category",
                "data": [
                    {
                        "category": "Dining",
                        "value1": 300
                    },
                    {
                        "category": "Transportation",
                        "value1": 150
                    },
                    {
                        "category": "Grocery",
                        "value1": 400
                    },
                    {
                        "category": "Other Transfers",
                        "value1": 250
                    }
                ]
            }
        }
        return response
    except Exception as e:
        print(f"Exception occurred get_visualizations: {e}")
        raise
