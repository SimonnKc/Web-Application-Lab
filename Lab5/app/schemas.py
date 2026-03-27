from pydantic import BaseModel, EmailStr

class NewAccount(BaseModel):
    full_name: str
    contact_email: EmailStr
    password: str

class AuthCredentials(BaseModel):
    contact_email: EmailStr
    password: str

class AccountSummary(BaseModel):
    uid: int
    full_name: str
    contact_email: str

    class Config:
        from_attributes = True

class AuthToken(BaseModel):
    token_string: str
    schema_type: str