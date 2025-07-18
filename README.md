project-root/
│
├── backend/                  # Flask Backend
│   ├── app.py
│   ├── models/
│   │   └── user_model.py
│   ├── routes/
│   │   └── user_routes.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/                 # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── .gitignore
│   └── ...
│
└── README.md

*Features
Role-based access: Admin and Students

CRUD operations on students and users

REST API using Flask + MySQL

React-based frontend

CORS enabled

*Prerequisites
Make sure you have these installed:

Python 3.7+

MySQL Server

Node.js (v16+)

npm or yarn

*Backend Setup (Flask)
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

*Start Backend Server
python app.py

*Start React Dev Server
npm start


