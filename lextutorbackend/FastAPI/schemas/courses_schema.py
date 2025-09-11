from pydantic import BaseModel
 
class Course(BaseModel):
    name: str
    code: str
    category: str
    advisors: list
    days: list
    time: str