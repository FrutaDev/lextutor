import motor.motor_asyncio
import os
from dotenv import load_dotenv
import asyncio

load_dotenv()

MONGO_URI = os.getenv('MONGO_URI')
MONGO_DB = os.getenv('MONGO_DB')


client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)

db = client[MONGO_DB]

 
#TEST CONNECTION
async def test_connection():
    collection = await db.list_collection_names()
    print(collection)
#asyncio.run(test_connection())