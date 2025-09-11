from fastapi import APIRouter, HTTPException
from FastAPI.schemas.user_schema import User
from FastAPI.schemas.login_schema import Login
from database.databaseconnection import db
from FastAPI.serialize_doc import serialize_doc
from bson import ObjectId
from utils.hashing import hash_password, verify_password
from utils.tokens import create_access_token



router = APIRouter()

 
@router.get('/users/')
async def get_users():
    try:
        users = db.users.find({}, {"_id": 1, "name": 1, "email": 1, "advisor": 1})
        users = await users.to_list(length=5000)
        if not users:
            raise HTTPException(status_code=400, detail="Not users found")
        users_obtained = [serialize_doc(course) for course in users]
        return users_obtained
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")



@router.get('/user/{user_id}')
async def get_user(user_id: str):
    try:
        user = db.users.find_one({"_id": ObjectId(user_id)})
        if not user:
            raise HTTPException(status_code=400, detail="lextutor user not found")
        return serialize_doc(user)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")

@router.post('/user')
async def create_user(user: User):
    try:
        if await db.users.find_one({"email": user.email}):
            raise HTTPException(status_code=400, detail="User already exists")
        
        new_user = user.model_dump()
        new_user["password"] = hash_password(new_user["password"])
        result = await db.users.insert_one(new_user)
        
        new_user["_id"] = str(result.inserted_id)
        new_user.pop("password")
        new_user.pop("role")
        
        return new_user
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")


@router.post('/login')
async def login(credentials: Login):
    try:
        user = await db.users.find_one({"email": credentials.email})
        if not user or not verify_password(credentials.password, user["password"]):
            raise HTTPException(status_code=400, detail="Invalid credentials")
       
        token_data = {"sub": str(user["_id"]), "email": user["email"], "advisor": user["advisor"]}
        access_token = create_access_token(data=token_data)
       
        return {"access_token": access_token, "token_type": "bearer"}
    except HTTPException:  
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")


@router.put('/user/{user_id}')
async def update_user(user_id: str, user: User):
    try:
        updated_user = user.model_dump(exclude_unset=True)
        result = db.users.update_one({"_id": ObjectId(user_id)},{"$set": updated_user})
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="User not found")
        updated_user_in_db = db.users.find_one({"_id": ObjectId(user_id)})
        return serialize_doc(updated_user_in_db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")

@router.delete("/user/{user_id}")
def delete_user(user_id: str):
    try:
        result = db.users.delete_one({"_id": ObjectId(user_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="User not found")
        return {"message": f"User {user_id} deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")