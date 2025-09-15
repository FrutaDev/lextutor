from fastapi import APIRouter, Depends
from utils.tokens import verify_token

router = APIRouter()

@router.get('./protected')
async def protected_route(current_user: str = Depends(verify_token)):
    return {"message": f"Hello user {current_user}, you accessed a protected route!"}