from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

from flask import Flask, request, jsonify
from flask_cors import CORS

from src import auth, assistant, dashboard

app = Flask(__name__)
CORS(app)


@app.route('/')
def default_route():
    return "Hey, Welcome to our application (We didn't name it so far)"

@app.route('/auth', methods=['POST'])
def authenticate():
    try:
        data = request.json
        result = auth.authenticate_user(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500
    

@app.route('/chat/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        result = assistant.get_chat_response(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500
    



@app.route('/insights/budget_insights', methods=['GET'])
def visualizations():
    try:
        result = assistant.budget_insights()  # Removed request.json
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500