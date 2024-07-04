import random

def get_chat_response(data=None):
    try:
        if data is None:
            data = {}

        responses = [
            {
                "categories": [
                    "Mar 2023",
                    "Apr 2023",
                    "May 2023",
                    "Jun 2023"
                ],
                "message": "Your monthly spending trend at Tim Hortons for March, April, May, and June 2023 are $135.81, $41.12, $13.96, and $1.09 respectively.",
                "title": "Monthly Spending Trend at Tim Hortons",
                "type": "bar-chart",
                "values": [
                    135.81,
                    41.12,
                    13.96,
                    1.09
                ],
                "visualization": True
            },
            {
                "categories": [],
                "message": "Your total spending for the year 2024 is $107,218.17.",
                "title": "",
                "type": None,
                "values": [],
                "visualization": False
            },
            {
                "categories": [
                    "Dining",
                    "Other",
                    "Entertainment"
                ],
                "message": "Here is a breakdown of your spending by category. !!!",
                "title": "Title of the graph",
                "type": "pie-chart",
                "values": [
                    97.62,
                    287.7,
                    392.25
                ],
                "visualization": True
            }
        ]

        response = random.choice(responses)
        
        return response
    except Exception as e:
        print(f"Exception occurred get_chat_response: {e}")
        raise
