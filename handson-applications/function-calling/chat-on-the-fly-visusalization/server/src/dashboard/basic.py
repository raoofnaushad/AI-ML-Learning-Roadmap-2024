


def get_dashboard_data(data):
    try:
        # Simulate fetching dashboard data
        response = {"categories": [
                            "Dining",
                            "Other",
                            "Entertainment"
                        ],
                        "message": "Here is a breakdown of your spending by category.",
                        "type": "bar-chart",
                        "values": [
                            97.62,
                            287.7,
                            392.25
                        ],
                        "visualization": True
                        }
        return {'status': 'success', 'data': response}
    except Exception as e:
        print(f"Exception occurred get_dashboard_data: {e}")
        raise


# def get_dashboard_data(data):
#     try:
#         # Simulate fetching dashboard data
#         data = [
#             {
#                 "type": "pie-graph",
#                 "title": "Comparison of Your Spending with Similar Users",
#                 "data": [
#                     {
#                         "category": "Dining",
#                         "value": 300
#                     },
#                     {
#                         "category": "Transportation",
#                         "value": 150
#                     },
#                     {
#                         "category": "Grocery",
#                         "value": 400
#                     },
#                     {
#                         "category": "Other Transfers",
#                         "value": 250
#                     }
#                 ]
#             }
#         ]
#         return {'status': 'success', 'data': data}
#     except Exception as e:
#         print(f"Exception occurred get_dashboard_data: {e}")
#         raise
