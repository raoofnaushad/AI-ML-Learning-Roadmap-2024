


def get_chat_response(data=None):
    try:
        if data is None:
            data = {}
        response = {
            "chatResponse": "This is a default chat response."
        }
        return response
    except Exception as e:
        print(f"Exception occurred get_chat_response: {e}")
        raise
