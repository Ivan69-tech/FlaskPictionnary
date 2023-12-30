from flask import Flask, render_template, request
from flask_socketio import SocketIO


app = Flask(__name__, static_folder='/app/', static_url_path='/static')

socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('json_message')
def handle_message(msg):
    socketio.emit('json_response', msg, include_self=False)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)