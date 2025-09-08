from datetime import datetime
from pydantic import BaseModel

class scheduled_courses(BaseModel):
    name_course: str
    advisor: str
    date: datetime 