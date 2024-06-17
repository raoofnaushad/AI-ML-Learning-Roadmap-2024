


def get_dashboard_data(data):
    try:
        # Simulate fetching dashboard data
        data = [
            {
                "type": "bar-graph",
                "data": [
                    {
                        "category": "Dining",
                        "value": 300,
                        "color": "#FF5733",
                        "label": "Restaurants"
                    },
                    {
                        "category": "Transportation",
                        "value": 150,
                        "color": "#33FF57",
                        "label": "Gas/Public Transport"
                    },
                    {
                        "category": "Grocery",
                        "value": 400,
                        "color": "#3357FF",
                        "label": "Groceries"
                    },
                    {
                        "category": "Other Transfers",
                        "value": 250,
                        "color": "#F3FF33",
                        "label": "Miscellaneous"
                    }
                ]
            }
        ]
        return {'status': 'success', 'data': data}
    except Exception as e:
        print(f"Exception occurred get_dashboard_data: {e}")
        raise
