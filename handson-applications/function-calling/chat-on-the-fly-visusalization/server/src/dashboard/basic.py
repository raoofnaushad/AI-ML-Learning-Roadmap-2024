


def get_dashboard_data(data):
    try:
        # Simulate fetching dashboard data
        data = [
            {
                "type": "pie-graph",
                "title": "Comparison of Your Spending with Similar Users",
                "data": [
                    {
                        "category": "Dining",
                        "value": 300
                    },
                    {
                        "category": "Transportation",
                        "value": 150
                    },
                    {
                        "category": "Grocery",
                        "value": 400
                    },
                    {
                        "category": "Other Transfers",
                        "value": 250
                    }
                ]
            }
        ]
        return {'status': 'success', 'data': data}
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
