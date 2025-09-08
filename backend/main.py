from FastAPI.routers import courses_route
from FastAPI.routers import users_route
from fastapi import FastAPI, HTTPException

app = FastAPI()
 
@app.get('/')
async def main_test():
    try:
        return {"message": "I work"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")

app.include_router(courses_route.router)
app.include_router(users_route.router)