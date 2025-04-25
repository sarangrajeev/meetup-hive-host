from ninja import NinjaAPI, Router
from .schemas import *
from .models import Glug
from django.shortcuts import get_object_or_404

router = Router(tags=["Glug"])


@router.get("/list", response=list[GlugSchema])
def list_glugs(request):
    glugs = Glug.objects.all()
    return glugs

@router.get("/get/{glug_id}", response=GlugSchema)
def get_glug(request, glug_id: int):
    glug = get_object_or_404(Glug, id=glug_id)
    return glug

@router.post("/create", response=GlugSchema)
def create_glug(request, payload: CreateGlugSchema):
    glug = Glug.objects.create(**payload.dict())
    return glug

@router.put("/edit/{glug_id}", response=GlugSchema)
def update_glug(request, glug_id: int, payload: CreateGlugSchema):
    glug = get_object_or_404(Glug, id=glug_id)
    for attr, value in payload.dict().items():
        setattr(glug, attr, value)
    glug.save()
    return glug

@router.delete("/delete/{glug_id}")
def delete_glug(request, glug_id: int):
    glug = get_object_or_404(Glug, id=glug_id)
    glug.delete()
    return {"success": True}

