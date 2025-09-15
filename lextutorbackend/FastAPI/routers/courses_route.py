from fastapi import APIRouter, HTTPException
from bson import ObjectId
from database.databaseconnection import db
from FastAPI.schemas.courses_schema import Course
from utils.serialize_doc import serialize_doc

 
router = APIRouter()


@router.get('/courses')
async def get_courses():
    try:
        courses = db.courses.find()
        courses = await courses.to_list(length=100)
        if not courses:
            raise HTTPException()
        courses_obtained = [serialize_doc(course) for course in courses]
        return courses_obtained
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")


@router.post('/course')
async def create_course(course: Course):
    try:
        new_course = course.model_dump()
        if not new_course:
            raise HTTPException(status_code=400, detail="course not inserted")
        result = await db.courses.insert_one(new_course)
        new_course["_id"] = str(result.inserted_id)
        return new_course
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")


@router.get('/course/{course_id}')
async def get_course(course_id: str):
    try:
        course = await db.courses.find_one({"_id": ObjectId(course_id)})
        if not course:
            raise HTTPException(status_code=400, detail="user not inserted")
        serialize_doc(course)
        return course
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")

    
@router.put('/course/{course_id}')
async def update_course(course_id: str, course: Course):
    try:
        updated_course = course.model_dump(exclude_unset=True)
        result = db.courses.update_one({"_id": ObjectId(course_id)},{"$set": updated_course})
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Course not found")
        updated_course_in_db = db.courses.find_one({"_id": ObjectId(course_id)})
        return updated_course_in_db
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")

@router.delete("/course/{course_id}")
def delete_course(course_id: str):
    try:
        course = db.courses.delete_one({"_id": ObjectId(course_id)})
        if course.deleted_count == 0:
            raise HTTPException(status_code=404, detail="lextutor course not found")
        return {"message": f"User {course_id} deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")