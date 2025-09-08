from jose import JWTError, jwt
from jwt.exceptions import InvalidTokenError
from typing import Annotated
from pydantic import BaseModel
from datetime import timedelta, datetime, timezone
import os
from dotenv import load_dotenv
from fastapi.security import OAuth2PasswordBearer
from fastapi import HTTPException, status, Depends

load_dotenv()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

ACCESS_TOKEN_EXPIRE = 60
ALGORITHM = os.getenv('ALGORITHM')
SECRET_KEY = os.getenv('SECRET_KEY')

class Token(BaseModel):
    access_token: str
    token_type: str


def create_access_token(data, expires_data: timedelta | None = None):
    token = data.copy()
    if expires_data:
        expire = datetime.now(timezone.utc) + expires_data
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=45)
    token.update({"exp": expire})
    encoded_jwt = jwt.encode(token, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = str = payload.get("sub")
        if user_id is None:
                        raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token: no subject",
                headers={"WWW-Authenticate": "Bearer"},
            )
        return user_id
    except JWTError:
          raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or expired token",
                headers={"WWW-Authenticate": "Bearer"}
          )