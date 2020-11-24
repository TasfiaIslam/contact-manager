from .models import Contact
from .serializers import ContactSerializer
from rest_framework import viewsets, permissions

# Viewset - Allows to create CRUD api

# Contact Viewset


class ContactViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = ContactSerializer

    def get_queryset(self):
        return self.request.user.contacts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
