def budget_insights():
    try:
        response = {
            "visualization": True,
            "catchphrase": "Smart Savings: How You Compare to Your Peers",
            "message": """
            After analyzing your last month's transactions, we've identified some key areas where your spending habits differ from those of similar clients. You're doing an excellent job managing your Utilities expenses, coming in at over 50% below the average. However, there's room for improvement in categories like Dining, Groceries, and Transportation, where your spending is significantly lower than the average, suggesting you may be missing out on rewards or quality of life improvements. Here are some actionable insights to optimize your budget:

            1. **Dining Delights**: While you're spending much less on dining compared to your peers, consider if you're enjoying your meals or simply cutting costs. If it's the latter, consider treating yourself occasionally without breaking the bank by looking for dining deals or reward programs.

            2. **Grocery Gains**: Your grocery spending is well below average, which is great for savings. However, ensure you're not compromising on nutrition. Bulk-buying, using coupons, and shopping for in-season produce can maintain low costs while boosting health benefits.

            3. **Transport Tactics**: You're spending less on transportation, which is fantastic. If you're using public transport, consider a monthly pass for additional savings. If you drive, regular vehicle maintenance can prevent costly repairs and improve fuel efficiency.

            Keep up the excellent work on Utilities, where you're far more efficient than your peers. This is a significant achievement worth celebrating!
            """,
            "type": "distribution-graph",
            "title": "Comparative Analysis: Your Spending vs. People Like You",
            "data": [
                {
                    "category": "Dining",
                    "client_spending": 26.0,
                    "group_min": 44.1,
                    "group_max": 644.1,
                    "group_avg": 344.1
                },
                {
                    "category": "Education",
                    "client_spending": 294.3,
                    "group_min": 12.0,
                    "group_max": 612.0,
                    "group_avg": 312.0
                },
                {
                    "category": "Entertainment",
                    "client_spending": 212.7,
                    "group_min": 86.1,
                    "group_max": 513.9,
                    "group_avg": 213.9
                },
                {
                    "category": "Groceries",
                    "client_spending": 45.7,
                    "group_min": 182.2,
                    "group_max": 782.2,
                    "group_avg": 482.2
                },
                {
                    "category": "Health & fitness",
                    "client_spending": 35.3,
                    "group_min": 64.3,
                    "group_max": 664.3,
                    "group_avg": 364.3
                },
                {
                    "category": "Household",
                    "client_spending": 45.9,
                    "group_min": 261.7,
                    "group_max": 861.7,
                    "group_avg": 561.7
                },
                {
                    "category": "Shopping",
                    "client_spending": 41.4,
                    "group_min": 318.9,
                    "group_max": 918.9,
                    "group_avg": 618.9
                },
                {
                    "category": "Transportation",
                    "client_spending": 23.0,
                    "group_min": 8.5,
                    "group_max": 608.5,
                    "group_avg": 308.5
                },
                {
                    "category": "Travel",
                    "client_spending": 342.8,
                    "group_min": 582.2,
                    "group_max": 1182.2,
                    "group_avg": 882.2
                },
                {
                    "category": "Utilities",
                    "client_spending": 357.0,
                    "group_min": 100.4,
                    "group_max": 475.6,
                    "group_avg": 175.6
                }
            ]
        }
        return response
    except Exception as e:
        print(f"Exception occurred get_visualizations: {e}")
        raise