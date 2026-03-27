from fastapi import FastAPI
from app.database import Base, engine
from app.routes import auth_routes

# Create all tables on startup (for development convenience)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Lab 5 – FastAPI Auth")

app.include_router(auth_routes.router, prefix="/auth", tags=["Auth"])


@app.get("/")
def root():
    return {"message": "Lab 5 – FastAPI Auth API is running"}
