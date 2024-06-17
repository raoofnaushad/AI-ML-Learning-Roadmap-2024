
def get_offers(data):
    try:
        response = {
            "visualization": True,
            "message": "I can see that you used Uber Eats for 20% of the time for your dining. You could have used DoorDash instead.",
            "data": {
                "type": "line-graph",
                "title": "Money saved with offer applied",
                "data": [
                    {
                        "category": "January",
                        "value1": 200,
                        "value2": 180
                    },
                    {
                        "category": "February",
                        "value1": 220,
                        "value2": 190
                    },
                    {
                        "category": "March",
                        "value1": 250,
                        "value2": 210
                    },
                    {
                        "category": "April",
                        "value1": 230,
                        "value2": 200
                    },
                    {
                        "category": "May",
                        "value1": 240,
                        "value2": 220
                    }
                ]
            }
        }
        return response
    except Exception as e:
        print(f"Exception occurred get_offers: {e}")
        raise
