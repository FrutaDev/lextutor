from FastAPI.routers import courses_route
from FastAPI.routers import users_route
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def main_test():
    try:
        return {"message": "I work"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")

app.include_router(courses_route.router)
app.include_router(users_route.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)