#FastAPI Auth ---lab5

## Setup

```bash
# 1. Create & activate virtual environment (Windows)
python -m venv venv
venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run Alembic migration
alembic upgrade head

# 4. Start the server
uvicorn main:app --reload
```

## Endpoints

| Method | URL               | Description          |
|--------|-------------------|----------------------|
| POST   | `/auth/register`  | Register a new user  |
| POST   | `/auth/login`     | Login and get JWT    |

Interactive docs available at **http://127.0.0.1:8000/docs**

## Project Structure

```
LAB5_FastAPIAuth/
├── main.py
├── requirements.txt
├── alembic.ini
├── alembic/
│   ├── env.py
│   ├── script.py.mako
│   └── versions/
│       └── 001_create_users_table.py
└── app/
    ├── config.py         ← JWT settings (SECRET_KEY, etc.)
    ├── database.py       ← SQLAlchemy engine + session
    ├── models.py         ← ORM model (User)
    ├── schemas.py        ← Pydantic request/response schemas
    ├── dependencies.py   ← get_current_user dependency
    ├── controllers/
    │   └── auth_controller.py
    └── routes/
        └── auth_routes.py
```
