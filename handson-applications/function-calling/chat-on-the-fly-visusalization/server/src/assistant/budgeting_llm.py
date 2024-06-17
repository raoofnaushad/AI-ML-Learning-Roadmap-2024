
def get_budgeting_data(data):
    try:
        response = {
            "visualization": True,
            "message": "You could have saved some money if you changed your budget a little bit. Here is how your current spending looks when you compare it with people like you.",
            "data": {
                "type": "distribution-graph",
                "title": "Comparison of Your Spending with Similar Users",
                "data": [
                    {
                        "category": "Grocery",
                        "value": 400,
                        "mean": 350,
                        "min": 300,
                        "max": 450
                    },
                    {
                        "category": "Dining",
                        "value": 300,
                        "mean": 250,
                        "min": 200,
                        "max": 350
                    },
                    {
                        "category": "Transportation",
                        "value": 150,
                        "mean": 170,
                        "min": 100,
                        "max": 200
                    },
                    {
                        "category": "Others",
                        "value": 250,
                        "mean": 220,
                        "min": 180,
                        "max": 300
                    }
                ]
            }
        }
        return response
    except Exception as e:
        print(f"Exception occurred get_budgeting_data: {e}")
        raise
