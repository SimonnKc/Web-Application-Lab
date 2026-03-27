from sqlalchemy import Column, Integer, String
from app.database import DataSchemaBase

class AccountRecord(DataSchemaBase):
    __tablename__ = "account_entries"

    uid = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    contact_email = Column(String, unique=True, index=True, nullable=False)
    secret_hash = Column(String, nullable=False)