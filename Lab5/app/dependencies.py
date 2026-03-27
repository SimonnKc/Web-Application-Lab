from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from sqlalchemy.orm import Session

from app.database import fetch_db_session
from app.models import AccountRecord
from app.config import SECRET_KEY, ALGORITHM

bearer_scheme = HTTPBearer()

def authorize_user(
    auth: HTTPAuthorizationCredentials = Depends(bearer_scheme),
    session: Session = Depends(fetch_db_session),
) -> AccountRecord:
    raw_token = auth.credentials
    try:
        data_payload = jwt.decode(raw_token, SECRET_KEY, algorithms=[ALGORITHM])
        subject_id: str = str(data_payload.get("sub"))
        if not subject_id:
            raise ValueError
    except (JWTError, ValueError, KeyError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credential verification failed",
        )

    found_account = session.query(AccountRecord).filter(AccountRecord.uid == int(subject_id)).first()
    
    if found_account is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Account profile not found",
        )
        
    return found_account