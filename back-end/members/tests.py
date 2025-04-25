from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from .models import Membership

# Create your tests here.

class MembershipModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')
        self.membership = Membership.objects.create(
            user=self.user,
            blood_group='A+',
            gender='Man',
            phone_no='1234567890',
            city='Test City',
            address='123 Test St',
            pincode='123456',
            institution='Test Institution',
            dob='2000-01-01',
            glug='Test Glug',
            occupation='Student',
            occupation_details='Test Details'
        )

    def test_membership_creation(self):
        self.assertEqual(self.membership.user.username, 'testuser')

    def test_membership_list_view(self):
        response = self.client.get(reverse('membership_list'))
        self.assertEqual(response.status_code, 200)

    def test_membership_detail_view(self):
        response = self.client.get(reverse('membership_detail', args=[str(self.membership.id)]))
        self.assertEqual(response.status_code, 200)

    def test_membership_create_view(self):
        response = self.client.post(reverse('membership_create'), {
            'user': self.user.id,
            'blood_group': 'B+',
            'gender': 'Woman',
            'phone_no': '0987654321',
            'city': 'New City',
            'address': '456 New St',
            'pincode': '654321',
            'institution': 'New Institution',
            'dob': '1990-01-01',
            'glug': 'New Glug',
            'occupation': 'Professional',
            'occupation_details': 'New Details'
        })
        self.assertEqual(response.status_code, 302)

    def test_membership_update_view(self):
        response = self.client.post(reverse('membership_update', args=[str(self.membership.id)]), {
            'user': self.user.id,
            'blood_group': 'O-',
            'gender': 'Transperson',
            'phone_no': '1111111111',
            'city': 'Updated City',
            'address': '789 Updated St',
            'pincode': '111111',
            'institution': 'Updated Institution',
            'dob': '1980-01-01',
            'glug': 'Updated Glug',
            'occupation': 'Entrepreneur',
            'occupation_details': 'Updated Details'
        })
        self.assertEqual(response.status_code, 302)

    def test_membership_delete_view(self):
        response = self.client.post(reverse('membership_delete', args=[str(self.membership.id)]))
        self.assertEqual(response.status_code, 302)
