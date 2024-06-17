from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

from flask import Flask, request, jsonify
from src import auth, assistant, dashboard

app = Flask(__name__)

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

@app.route('/dashboard', methods=['GET'])
def get_dashboard():
    try:
        data = request.json
        result = dashboard.get_dashboard_data(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/preprompts', methods=['GET'])
def preprompts():
    try:
        data = request.json
        result = assistant.get_preprompts(data)
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

@app.route('/chat/visualizations', methods=['POST'])
def visualizations():
    try:
        data = request.json
        result = assistant.get_visualizations(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/chat/offers', methods=['POST'])
def offers():
    try:
        data = request.json
        result = assistant.get_offers(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/chat/budgeting', methods=['POST'])
def budgeting():
    try:
        data = request.json
        result = assistant.get_budgeting_data(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500
