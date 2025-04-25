from ninja import Schema


class CreateMembershipSchema(Schema):
    user: int


class MembershipSchema(Schema):
    user: int
    blood_group: str
    gender: str
    phone_no: str
    city: str
    address: str
    pincode: str
    institution: str
    dob: str
    glug: str
    occupation: str
    occupation_details: str
