from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "🏠 Welcome to my first Flask website!"

@app.route("/about")
def about():
    return "👋 My name is Atul. I am learning Flask, Docker, GitHub Actions, and Render."

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)