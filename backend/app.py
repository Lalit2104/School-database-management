from flask import Flask
from flask_cors import CORS
from routes.route import user_bp

app = Flask(__name__)
CORS(app, origins='*')

# Register Blueprint
app.register_blueprint(user_bp)

if __name__ == "__main__":
    app.run(debug=True)
