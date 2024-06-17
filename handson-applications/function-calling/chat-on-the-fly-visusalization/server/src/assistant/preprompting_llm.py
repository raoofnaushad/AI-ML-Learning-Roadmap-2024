

def get_preprompts(data):
    try:
        response = {
            "prePrompts": [
                "What are my recent transactions?",
                "How much did I spend last month?",
                "Show me a graph of my spending by category."
            ]
        }
        return response
    except Exception as e:
        print(f"Exception occurred get_preprompts: {e}")
        raise
