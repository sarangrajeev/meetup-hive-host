from ninja import NinjaAPI, Router
from .schemas import *
from .models import Institution, Staff, Glug
from django.shortcuts import get_object_or_404

router = Router(tags=["institutions"])
router_staff = Router(tags=["institutions->staff"])

@router.get("/list", response=list[InstitutionSchema])
def list_institution(request):
    institution = Institution.objects.all()
    return institution

@router.get("/get/{institution_id}", response=InstitutionSchema)
def get_institutions(request, institution_id: int):
    institution = get_object_or_404(Institution, id=institution_id)
    return institution

@router.post("/create", response=InstitutionSchema)
def create_institution(request, payload: CreateInstitutionSchema):
    # Fetch the Glug instance using the provided glug ID
    glug_instance = get_object_or_404(Glug, id=payload.glug)
    # Create the Institution with the Glug instance
    institution = Institution.objects.create(
        name=payload.name,
        location=payload.location,
        institution_type=payload.institution_type,
        glug=glug_instance
    )
    return institution

@router.put("/edit/{institution_id}", response=InstitutionSchema)
def update_institution(request, institution_id: int, payload: CreateInstitutionSchema):
    institution = get_object_or_404(Institution, id=institution_id)
    # Fetch the Glug instance using the provided glug ID
    glug_instance = get_object_or_404(Glug, id=payload.glug)
    # Update the Institution with the Glug instance
    institution.name = payload.name
    institution.location = payload.location
    institution.institution_type = payload.institution_type
    institution.glug = glug_instance
    institution.save()
    return institution

@router.delete("/delete/{institution_id}")
def delete_institution(request, institution_id: int):
    institution = get_object_or_404(Institution, id=institution_id)
    institution.delete()
    return {"success": True}

@router_staff.get("/list", response=list[StaffSchema])
def list_staff(request):
    staff = Staff.objects.all()
    return staff

@router_staff.get("/get/{staff_id}", response=StaffSchema)
def get_staff(request, staff_id: int):
    staff = get_object_or_404(Staff, id=staff_id)
    return staff

@router_staff.post("/create", response=StaffSchema)
def create_staff(request, payload: CreateStaffSchema):
    # Fetch the Institution instance using the provided institution ID
    institution_instance = get_object_or_404(Institution, id=payload.institution)
    # Create the Staff with the Institution instance
    staff = Staff.objects.create(
        name=payload.name,
        position=payload.position,
        dept=payload.dept,
        contact=payload.contact,
        gmail=payload.gmail,
        institution=institution_instance
    )
    return staff

@router_staff.put("/edit/{staff_id}", response=StaffSchema)
def update_staff(request, staff_id: int, payload: CreateStaffSchema):
    staff = get_object_or_404(Staff, id=staff_id)
    # Fetch the Institution instance using the provided institution ID
    institution_instance = get_object_or_404(Institution, id=payload.institution)
    # Update the Staff with the Institution instance
    staff.name = payload.name
    staff.position = payload.position
    staff.dept = payload.dept
    staff.contact = payload.contact
    staff.gmail = payload.gmail
    staff.institution = institution_instance
    staff.save()
    return staff

@router_staff.delete("/delete/{staff_id}")
def delete_staff(request, staff_id: int):
    staff = get_object_or_404(Staff, id=staff_id)
    staff.delete()
    return {"success": True}

router.add_router("staff", router_staff)
