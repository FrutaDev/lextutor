from pydantic import BaseModel
 
class Course(BaseModel):
    name: str
    code: str
    category: str
    tutors: list
    days: list