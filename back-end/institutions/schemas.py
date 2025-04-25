from ninja import Schema
from typing import Optional

class InstitutionSchema(Schema):
    id: int 
    name: str
    location: Optional[str] = None
    institution_type: str
    glug: int

    @staticmethod
    def resolve_glug(obj):
        return obj.glug.id  # glug is serialized as an integer ID

class CreateInstitutionSchema(Schema):
    name: str
    location: Optional[str] = None
    institution_type: str
    glug: int

class StaffSchema(Schema):
    id: int
    name: str
    position: str
    dept: str
    contact: str
    gmail: str
    institution: int  # Changed to int since it's a ForeignKey

    @staticmethod
    def resolve_institution(obj):
        return obj.institution.id  # institution is serialized as an integer ID

class CreateStaffSchema(Schema):
    name: str
    position: str
    dept: str
    contact: str
    gmail: str
    institution: int  # Changed to int since it's a ForeignKey
