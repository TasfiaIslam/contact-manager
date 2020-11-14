from .models import Contact
from .serializers import ContactSerializer
from rest_framework import viewsets, permissions

# Viewset - Allows to create CRUD api

# Contact Viewset
class ContactViewset(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [ permissions.AllowAny ]
    serializer_class = ContactSerializer