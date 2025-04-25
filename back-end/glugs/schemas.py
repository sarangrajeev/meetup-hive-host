from ninja import Schema

class GlugSchema(Schema):
    id: int         
    glug_name: str
    description: str
    organization: str
    location: str
    glug_type: str


class CreateGlugSchema(Schema):
    glug_name: str
    description: str
    organization: str
    location: str
    glug_type: str
