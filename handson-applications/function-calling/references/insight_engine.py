

class BudgetChatEngine:
    def __init__(self, banking_insights, budget_system_prompt, budget_user_prompt):
        self.banking_insights = banking_insights
        self.budget_system_prompt = budget_system_prompt
        self.budget_user_prompt = budget_user_prompt
        self.chat_history = [
            {
                "role": "system",
                "content": self.budget_system_prompt
            }
        ]
        self.max_tokens = 4000

    def generate_budget_insights(self):
        # Get all insights from the banking_insights object
        insights = self.banking_insights.get_all_insights()
        
        # Populate the user prompt with the insights
        user_prompt = self.budget_user_prompt.format(insights=insights)
        
        # Add to chat history
        self._add_to_chat_history("user", user_prompt)
        self._trim_chat_history()
        
        # Send request to the API
        response = self._get_chat_completion(self.chat_history)
        
        # Process response
        response_str = response['choices'][0]['message']['content']
        self._add_to_chat_history("assistant", response_str)
        
        return response_str

    def _get_chat_completion(self, all_messages):
        # Example API request - replace with actual API endpoint and request details
        api_url = "https://api.example.com/chat/completions"
        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
        }
        data = {
            "model": "gpt-4-turbo",
            "messages": all_messages,
            "max_tokens": self.max_tokens,
            "temperature": 0.2
        }
        
        response = requests.post(api_url, headers=headers, json=data)
        return response.json()

    def _calculate_token_count(self, messages):
        return sum(len(m['content'].split()) for m in messages)

    def _trim_chat_history(self):
        total_tokens = self._calculate_token_count(self.chat_history)
        while total_tokens > (self.max_tokens - 300):
            if len(self.chat_history) > 1:
                self.chat_history.pop(1)
            total_tokens = self._calculate_token_count(self.chat_history)

    def _add_to_chat_history(self, role, message):
        self.chat_history.append({
            "role": role,
            "content": message
        })