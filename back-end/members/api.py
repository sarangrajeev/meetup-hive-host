from ninja import NinjaAPI, Router
from django.shortcuts import get_object_or_404
from .models import Membership
from django.contrib.auth.models import User
from .schemas import MembershipSchema, CreateMembershipSchema
    
router = Router(tags=["members"])


@router.get("/memberships", response=list[MembershipSchema])
def list_memberships(request):
    return list(Membership.objects.all())

@router.get("/memberships/{membership_id}", response=MembershipSchema)
def get_membership(request, membership_id: str):
    membership = get_object_or_404(Membership, id=membership_id)
    return membership

@router.post("/memberships/create", response=MembershipSchema)
def create_membership(request, payload: MembershipSchema):
    user = get_object_or_404(User, id=payload.user)
    membership = Membership.objects.create(**payload.dict(), user=user)
    return membership

@router.put("/memberships/{membership_id}", response=MembershipSchema)
def update_membership(request, membership_id: str, payload: MembershipSchema):
    membership = get_object_or_404(Membership, id=membership_id)
    for attr, value in payload.dict().items():
        setattr(membership, attr, value)
    membership.save()
    return membership

@router.delete("/memberships/{membership_id}")
def delete_membership(request, membership_id: str):
    membership = get_object_or_404(Membership, id=membership_id)
    membership.delete()
    return {"success": True}
