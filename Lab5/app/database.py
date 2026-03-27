from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

SQLITE_FILE_PATH = "sqlite:///./app_data.db"

db_engine = create_engine(
    SQLITE_FILE_PATH,
    connect_args={"check_same_thread": False}
)

LocalSessionProvider = sessionmaker(
    bind=db_engine, 
    autocommit=False, 
    autoflush=False
)

DataSchemaBase = declarative_base()

def fetch_db_session():
    context = LocalSessionProvider()
    try:
        yield context
    finally:
        context.close()