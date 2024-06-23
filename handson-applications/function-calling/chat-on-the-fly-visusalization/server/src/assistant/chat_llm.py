


def get_chat_response(data=None):
    try:
        if data is None:
            data = {}
        response = {
            "chatResponse": "This is a default chat response."
        }

        response = {"categories": [
                            "Dining",
                            "Other",
                            "Entertainment"
                        ],
                        "message": "Here is a breakdown of your spending by category.",
                        "title" : "Title of the graph",
                        "type": "bar-chart",
                        "values": [
                            97.62,
                            287.7,
                            392.25
                        ],
                        "visualization": True
                        }
        
        return response
    except Exception as e:
        print(f"Exception occurred get_chat_response: {e}")
        raise
